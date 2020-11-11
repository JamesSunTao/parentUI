<template>
<div class="div">
  <headerbar></headerbar>
  <headerbar style="top:44px" :title='title1'>
    <div class="header-right" slot="right">
      我
    </div>
  </headerbar>
  <headerbar style="top:44px" title='没有返回title'>
    <div class="header-right" slot="left"></div>
    <div class="header-right" slot="right">
      关闭
    </div>
  </headerbar>
  <headerbar style="top:244px" title='普通title'>
    <div class="header-right" slot="right">
      关闭
    </div>
  </headerbar>
  <headerbar style="top:88px" :title="title" @select="clickHandle"></headerbar>
  <headerbar style="top:132px" :title="title2" @select="clickHandle">
    <div class="header-right" slot="right">
      我
    </div>
  </headerbar>
</div>
</template>
<script>
export default {
  data() {
    return {
      title1: '推荐',
      title2:[{
        mark: '1',
        text: '标题标题',
        active: true,
        },{
          mark: '2',
          text: '标题标题',
          active: false,
        }
      ],
      title: [{
        mark: '1',
        text: '推荐',
        active: true,
      },{
        mark: '2',
        text: '热门',
        active: false,
      },{
        mark: '3',
        text: '同城',
        active: false,
      }]
    }
  },
  methods: {
    clickHandle(item) {
      this.title1 = item.text
      this.$dialog({
        'title': item.text
      })
    }
  }
}
</script>
