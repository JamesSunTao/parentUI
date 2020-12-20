<template>
  <div
    class="ui-search"
    :class="{ selected: showMark }"
    @click="closeMark"
    ref="search"
  >
    <div class="ui-search_wrapper" ref="searchwrapper">
      <div class="ui-search_inputWrapper">
        <div class="search_icon"></div>
        <input
          class="ui-search__input"
          ref="input"
          type="search"
          placeholder="搜索"
          @focus="focusHandle"
          v-model="model"
          @blur="blurHandle"
          @keypress="startSearch"
        />
        <div class="delete" v-show="model" ref="delete"  @click="deleteHandle">
          <div class="delete-left"></div>
          <div class="delete-right"></div>
        </div>
      </div>
      <div class="cancel" @click="cancel">取消</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "search",
  props: {
    value: {},
    label: {},
    supportMark: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showMark: false
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit("input", val)
      },
    },
  },
  methods: {
    focusHandle(e) {
      if(this.supportMark) {
        this.showMark = true
        this.getPosition()
      }
      this.$emit("focus", e)
    },
    getPosition() {
     const { top } = this.$refs.searchwrapper.getBoundingClientRect()
     this.$refs.search.style.top = top + 'px'
    },
    closeMark(e) {
      if (this.supportMark && (!this.$refs.searchwrapper.contains(e.target)) && !this.$refs.delete.contains(e.target)) {
        this.showMark && (this.showMark = false)
      }
    },
    blurHandle(e) {
      this.$emit("blur", e)
    },
    deleteHandle(e) {
        this.model = ''
        this.$emit("delete", e)
        this.$refs.input.focus()
    },
    cancel() {
        this.$emit("cancel")
        this.supportMark && this.showMark && (this.showMark = false)
    },
    startSearch(event) {
      if (event.keyCode === 13) {
          event.preventDefault()
          this.$emit("startSearch", event)
          this.supportMark && (this.showMark = false)
          this.$refs.input.blur()
      }
    }
  },
};
</script>

<style  lang='stylus' scoped>
@import '../../../style/var.styl'
.selected
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0,0,0,.5)
.ui-search_wrapper
  height: 44px
  background-color: $vk-bgc-white
  display: flex
  z-index:2
  padding: 4px 16px
  z-index:100
  .delete
   width: 16px;
   height: 16px;
   background: #d4d4d4;
   border-radius 50%
   position relative
   margin-right: 10px
   .delete-left
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%) rotate(45deg);
    width 6px
    height 1px
    background-color #fff
   .delete-right
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%) rotate(135deg);
    width 6px
    height 1px
    background-color #fff
  .cancel
    width: 33px
    font-size: 16px
    line-height: 44px
    font-weight: 400
    color: #333333
  .mask
    width: 100%
    height: 100vh
    opacity: 0.5
    background-color: #000
  .ui-search_inputWrapper
    border: 1px solid #eee
    display: flex
    flex-grow: 1
    align-items: center
    border-radius: $vk-radius-md
    background: #f7f7f7
    padding: 4px 0
    margin-right: 12px
    .search_icon
      width: 13px
      height: 12px
      background:url('../img/search.png') center / 100% 100% no-repeat
      margin: 0 7px 0 15px
    .ui-search__input
      display: block
      box-sizing: border-box
      width: calc(100% - 59px)
      min-width: 0;
      margin: 0;
      outline: none
      padding: 0;
      color: #323233;
      line-height: inherit;
      text-align: left;
      background-color: transparent
      height: 24px
      border: 0;
      resize: none
      &::-webkit-search-cancel-button
            -webkit-appearance: none
</style>