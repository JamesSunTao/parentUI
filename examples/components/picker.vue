<template lang="pug">
  .container
    headerbar(title="picker")
    <div class="card">
      <div class="title">普通用法</div>
      <div class="content" @click="changeReg">选择省</div>
      <div class="content" @click="changeCity">选择市</div>
      <div class="content" @click="chenageArea">选择区</div>
      <div class="content" @click="chenageArea">{{province.name}}-{{city.name}}-{{area.name}}</div>
      <div class="content" @click="changeRegion">省市区联动</div>
      <div class="content" @click="changeRegion">{{region}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      province: {},
      city: {},
      area: {},
      region: '',
    }
  },
  created() {
  },
  methods: {
    changeReg() {
      this.$picker({
        title: '选择省',
        type: 'province',
        confirmFn: (values) => {
          this.province = values[0]
        }
      })
    },
    changeCity() {
      if (!this.province.name) {
        this.$toast({text: '请选择省'})
        return
      }
      this.$picker({
        title: '选择市',
        type: 'city',
        code: this.province.code,
        confirmFn: (values) => {
          this.city = values[0]
        }
      })
    },
    chenageArea() {
      if (!this.city.name) {
        this.$toast({text: '请选择市'})
        return
      }
      this.$picker({
        title: '选择区',
        type: 'area',
        code: this.city.code,
        confirmFn: (values) => {
          this.area = values[0]
        }
      })
    },
    changeRegion() {
      this.$picker({
        title: '选择区',
        type: 'region',
        col: 5,
        confirmFn: (values) => {
          this.region = `${values[0].name}-${values[1].name}-${values[2].name}`
        }
      })
    }
  }
}
</script>
<style scoped>
.card{
  padding: 44px 16px 0 16px;
}
.title {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.custom-name{
  background: red
}
.content{
  height: 44px;
  line-height: 44px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee
}
</style>