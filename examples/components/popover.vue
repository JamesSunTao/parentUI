<template>
  <div class="aaa">
    <headerbar title="popover"></headerbar>
    <div class="content">
      <div class="content-item">
        <div class="info"> 默认态度（弹框位置）</div>
        <popover class="aa"  autoShow stopClickDom label="点击doc，后我是不会关闭的">
        <span class="btn" @click="fn" slot="button">左上</span>
        </popover>
        <popover class="aa" position_y="bottom" label="点击doc，我会关闭的">
        <span class="btn" @click="fn" slot="button">左下</span>
        </popover>
        <popover class="aa" position_x="right" stopClickDom closeable label="我没有关闭按钮">
        <span class="btn" @click="fn" slot="button">右上</span>
        </popover>
        <popover class="aa" position_x="right" position_y="bottom"   stopClickDom label="字啊啊我是文字啊">
        <span class="btn" @click="fn" slot="button">右下</span>
        </popover>
      </div>
      <div class="content-item">
        <div class="info">默认弹出</div>
        <popover class="aa" autoShow   label="文字啊啊我是文字啊">
          <span class="btn" slot="button">点我</span>
        </popover>
      </div>
       <div class="content-item">
        <div class="info">多行箭头上移动</div>
        <popover class="aa" type="multi" label="啊我是文字啊啊啊我是文字啊啊啊我是文字啊啊我是文字啊">
          <span class="btn" slot="button">点我</span>
        </popover>
        <popover class="aa" type="multi"  position_y="bottom"  label="啊我是文字啊啊啊我是文字啊啊啊我是文字啊啊我是文字啊">
          <span class="btn" slot="button">点我</span>
        </popover>
      </div>
       <div class="content-item">
        <div class="info">更换主题（背景白色）</div>
        <popover class="aa" type="multi" theme="light" label="啊我是文字啊啊啊我是文字啊啊啊我是文字啊啊我是文字啊">
          <span class="btn" slot="button">点我</span>
        </popover>
        <popover class="aa" type="multi" theme="light" position_y="bottom" label="啊啊啊我是文字啊啊我是文字啊">
          <span class="btn" slot="button">点我</span>
        </popover>
      </div>
      <div class="content-item">
        <div class="info">自定义内容</div>
        <popover class="aa" autoShow position_y="bottom" theme="light">
            <div>文字文字文字</div>
            <div class="line"></div>
            <div>文字文字文字</div>
            <div class="line"></div>
            <div>文字文字文字</div>
          <span class="btn" slot="button">点我</span>
        </popover>
      </div>
      <div class="content-item">
        <div class="info">自定义位置</div>
        <popover class="aa" position_x="right" theme="light" closeable   symbolMiddle :top="427"  :left="0" label="啊我字是，文字啊">
          <div class="btn2" slot="button"></div>
        </popover>
        <popover class="aa" position_x="right" theme="light" closeable autoShow :borderRadius="'4px'" symbolMiddle :top="424"  :left="142.453" label="啊我字是，文字啊">
          <div class="btn2" slot="button"></div>
        </popover>
      </div>
      </div>     
    </div>
</template>
<script>
import popover from '../../src/components/popover/src/popover.vue'
export default {
  components: { popover },
  methods: {
    fn() {
      console.log(123)
    }
  }
}
</script>

<style lang='stylus' scope>
 .line
  width: 100%
  height: 1px
  background: #eee
  margin: 5px 0
 .aaa
   text-align: left
   .content
    margin-top: 44px
    padding: 20px 16px
    text-align: left
    .info
     margin-bottom: 5px
   .btn
    border 2px solid #eee
    border-radius: 1px
  .aa
   margin-bottom: 20px
   margin-right: 40px
  .adada
   background: red
  .btn2
    width: 100px
    height: 100px
    background: url('../assets/images/book.png') center/contain no-repeat 
</style>