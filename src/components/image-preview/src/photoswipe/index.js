import Vue from 'vue'
import pSwipe from './_photoswipe.vue'

const PhotoSwipe = {}
PhotoSwipe.install = (Vue) => {
  const PreviewController = Vue.extend(pSwipe)
  PreviewController.prototype.close = function() {
    this.data = []
    this.options = {}
    this.imageIndex = 0
  }
  Vue.prototype.$imagePreview = (opts = {}) => {
    const elem = document.createElement('div')
    let instance = new PreviewController()
    instance.$mount(elem)
    instance.data = opts.images || []
    instance.imageIndex = opts.index || 0
    instance.showDelete = !!opts.showDelete
    instance.showBack = !!opts.showBack
    document.body.appendChild(instance.$el)
    instance.$on('close', () => {
      instance.close()
      document.body.removeChild(instance.$el)
      instance = null
      if (opts.deleteAction) {
        opts.deleteAction()
      }
      opts.close()
    })
    instance.$on('beforeDelete',  (callback) => {
      if (opts.beforeDeleteImg) {
        opts.beforeDeleteImg().then(() => {
          callback()
        }, () => {})
      } else {
        callback()
      }
    })
    instance.$on('delete', (index) => {
      if (opts.delete) {
        opts.delete(index)
      }
    })
  }
}

Vue.use(PhotoSwipe)

export default PhotoSwipe

