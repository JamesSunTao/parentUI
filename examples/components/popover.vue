<template>
<div class="div">
  <div class="popovertest">
    <popover :text="textString" ref="popover" trigger="click" :position="position" :theme="theme">
      <div class="reference" slot="reference"></div>
    </popover>
  </div>
  <div class="popovertest">
    <popover trigger="click" position="bottom" :isList="true" theme="light">
      <div class="reference" slot="reference"></div>
      <ul class="text-content" slot="content">
        <li class="text-item" v-for="(item,index) in textArr" :key="index">{{item}}</li>
      </ul>
    </popover>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      textArr: ['文本文本文本', '文本文本文本', '文本文本文本', '文本文本文本', '文本文本文本'],
      textString: '这是一段文本描述~这是一段文本描述~这是一段文本描述~',
      position: 'top',
      theme: 'dark'
    }
  },
  methods: {
    //
  },
}
</script>
<style lang="stylus" scoped>
.div
  padding-top: 40px
li,ul
  list-style: none
  padding: 0
  margin: 0
.text-item
  line-height: 15px
  padding: 12px 9px
  border-bottom: 1px solid #edeff2
  &:last-child
    border: none
  &:hover
    color: #FF6422
.btn
  padding: 5px 17px
  background: #ff6422
  border-radius: 18px
  line-height: 14px
  text-align: center
  color: #ffffff
  font-size: 14px
  font-weight: 500
.popover
  margin-bottom: 20px
.reference
  width: 60px
  height: 60px
  background: #ff6422
  border-radius: 4px
.popovertest
  margin-top: 100px
</style>
