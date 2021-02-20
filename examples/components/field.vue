<template>
  <div class="aaa">
    <headerbar title="field"></headerbar>
    <div class="bbb">
       <div class="ccc">默认态</div>
       <field v-model="value" label="文本"
       @input="fn"
        @change="fn"
     > </field>
      <div class="ccc">自定义类型</div>
       <field v-model="value6" label="密码"
     type="password"
     required
     @change="fn"
     > </field>
     <field v-model="value6" label="数字"
     type="number"
     required
     @change="fn"
     > </field>
     <div class="ccc">输入框禁用</div>
     <field v-model="value1" label="联系人"
     @change="fn"
     disabled
     placeholder="输入框已禁用"
     > </field>
     <div class="ccc">支持按钮</div>
     <field v-model="value3" label="短信验证码"
     required 
     placeholder="请输入验证码"
     :labelStyle="{'width': '30%'}"
     :max-length="maxlength"
     @change="fn"
     > 
      <button slot="button">发送验证码</button>
     </field>
     <div class="ccc">支持图标</div>
      <field v-model="value3" label="联系人"
      placeholder="请输入联系人"
     :max-length="maxlength"
     @change="fn"
     > 
      <div slot="left-icon" class="iconleft"></div>
      <div slot="right-icon" class="iconright"></div>
     </field>
     <div class="ccc">支持多行（textarea）</div>
     <field v-model="value5" label="详细地址"
     type ='textarea'
     @change="fn"
     placeholder="如：街道、门牌号、小区、单元等"
     > </field>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "xxx",
      value1: "",
      value3: "",
      maxlength: 14,
      value6: 12312312,
      value5: "摩天大楼1单元202摩天大楼1单元202摩天大楼1单元202摩天大楼1单元202摩天大楼1单元202摩天大楼1单元202摩天大楼1单元202摩天大楼1单元202摩天大楼1单元202"
    }
  },
  methods: {
    fn(value) {
      window.console.log(value)
    }
  }
}
</script>
<style lang="stylus" scoped>
.iconleft
  background: url("../assets/images/hint.png") center / 100% 100% no-repeat
  margin-right: 4px
  width: 20px
  height: 20px
.iconright
  background: url("../assets/images/warn.png") center / 100% 100% no-repeat
  margin-right: 4px
  width: 20px
  height: 20px
.bbb
  margin-top: 44px
  .ccc
    margin: 10px 10px
    text-align:left
</style>