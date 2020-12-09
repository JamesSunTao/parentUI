var exportObj = {}
import Vue from 'vue'
if (!Vue.prototype.$isServer) {
  let docStyle = document.documentElement.style
  let engine
  let translate3d = false

  if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
    engine = 'presto'
  } else if ('MozAppearance' in docStyle) {
    engine = 'gecko'
  } else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit'
  } else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident'
  }

  let cssPrefix = {trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-'}[engine]

  let vendorPrefix = {trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O'}[engine]

  let helperElem = document.createElement('div')
  let perspectiveProperty = vendorPrefix + 'Perspective'
  let transformProperty = vendorPrefix + 'Transform'
  let transformStyleName = cssPrefix + 'transform'
  let transitionProperty = vendorPrefix + 'Transition'
  let transitionStyleName = cssPrefix + 'transition'
  let transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd'

  if (helperElem.style[perspectiveProperty] !== undefined) {
    translate3d = true
  }

  let getTranslate = function(element) {
    let result = {left: 0, top: 0}
    if (element === null || element.style === null) return result

    let transform = element.style[transformProperty]
    let matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/ig.exec(transform)
    if (matches) {
      result.left = +matches[1]
      result.top = +matches[3]
    }

    return result
  }

  let translateElement = function(element, x, y) {
    let xvalue = x
    let yvalue = y
    if (xvalue === null && yvalue === null) return

    if (element === null || element === undefined || element.style === null) return

    if (!element.style[transformProperty] && xvalue === 0 && yvalue === 0) return

    if (xvalue === null || yvalue === null) {
      let translate = getTranslate(element)
      if (xvalue === null) {
        xvalue = translate.left
      }
      if (yvalue === null) {
        yvalue = translate.top
      }
    }

    cancelTranslateElement(element)

    if (translate3d) {
      element.style[transformProperty] += ' translate(' + (xvalue ? (xvalue + 'px') : '0px') + ',' + (yvalue ? (yvalue + 'px') : '0px') + ') translateZ(0px)'
    } else {
      element.style[transformProperty] += ' translate(' + (xvalue ? (xvalue + 'px') : '0px') + ',' + (yvalue ? (yvalue + 'px') : '0px') + ')'
    }
  }

  let cancelTranslateElement = function(element) {
    if (element === null || element.style === null) return
    let transformValue = element.style[transformProperty]
    if (transformValue) {
      transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '')
      element.style[transformProperty] = transformValue
    }
  }
  exportObj = {
    transformProperty: transformProperty,
    transformStyleName: transformStyleName,
    transitionProperty: transitionProperty,
    transitionStyleName: transitionStyleName,
    transitionEndProperty: transitionEndProperty,
    getElementTranslate: getTranslate,
    translateElement: translateElement,
    cancelTranslateElement: cancelTranslateElement
  }
}

export default exportObj
