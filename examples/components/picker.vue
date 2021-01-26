<template lang="pug">
  .container
    headerbar(title="picker")
    <div class="card">
      <div class="title">普通用法</div>
      <div class="content" @click="changeReg = true">选择省</div>
      <div class="content" @click="changeCity = true">选择市</div>
      <div class="content" @click="chenageArea = true">选择区</div>
      <div class="content" @click="">{{province.name}}-{{city.name}}-{{area.name}}</div>
      <div class="content" @click="changeRegion = true">省市区联动</div>
      <div class="content" @click="">{{region}}</div>
      <div class="content" @click="changeDate = true">日期选择器</div>
      <div class="content" @click="">生日： {{date}}</div>
      <div class="content" @click="changecustom = true">自定义选择器-不需要联动</div>
      <div class="content" @click="linkage = true">自定义选择器-数据联动</div>
      <div class="content" @click="openDialog">自定义选择器-dialog</div>
    </div>
    picker(title="选择省" :visible.sync='changeReg' type="province" @confirm-fn="confirmFnProvince")
    picker(title="选择市" :visible.sync='changeCity' type="city" :code="province.code" @confirm-fn="confirmFnCity")
    picker(title="选择区" :visible.sync='chenageArea' type="area" :code="city.code" @confirm-fn="confirmFnArea")
    picker(title="省市区联动" :visible.sync='changeRegion' @confirm-fn="confirmFnRegion")
    picker(title="日期选择器" :visible.sync='changeDate' @changed="dataChage" type="date" :start="2004" :end="2020" @confirm-fn="confirmFnDate")
    picker(title="固定数据" :default-value="['下午', '9时', '11分']" :visible.sync='changecustom' type="custom" :custom-values="changecustomData()" @confirm-fn="confirmFnCostom")
    picker(ref="picker" :default-value="['0', '0-1']" title="联动数据" :visible.sync='linkage'  type="custom" :custom-values="classData" @changed="dataChange")
</template>
<script>
const lingkageData = [{
  values: [{
    name: '上午',
    code: '0',
    children: [{
      name: '第一节课',
      code: '0-0',
    }, {
      name: '第二节课',
      code: '0-1',
    }]
  }, {
    name: '下午',
    code: '1',
    children: [{
      name: '第三节课',
      code: '1-0',
    }, {
      name: '第四节课',
      code: '1-1',
    }]
  }]
}]
export default {
  data() {
    return {
      changeReg: false,
      changeCity: false,
      chenageArea: false,
      changeRegion: false,
      changeDate: false,
      changecustom: false,
      linkage: false,
      classData: [{
        values: lingkageData[0].values
      }, {
        values: lingkageData[0].values[0].children
      }],
      province: {},
      city: {},
      area: {},
      region: '',
      date: ''
    }
  },
  created() {
  },
  methods: {
    confirmFnProvince(values){
      this.province = values[0]
    },
    openDialog() {
      this.$dialog({title: "111"})
    },
    confirmFnCity(values) {
      if (!this.province.name) {
        this.$toast({text: '请选择省'})
        return
      }
      this.city = values[0]
    },
    confirmFnArea(values) {
      if (!this.city.name) {
        this.$toast({text: '请选择市'})
        return
      }
      this.area = values[0]
    },
    confirmFnRegion(values) {
      this.region = `${values[0].name}-${values[1].name}-${values[2].name}`
    },
    confirmFnDate(values) {
      this.date = `${values[0]}年${values[1]}月${values[2]}日`
    },
    confirmFnCostom(values) {
      // console.log(values)
    },
    dataChage(values) {
      console.log(values)
    },
    changecustomData() {
      return [{
          values:['上午', '下午', '12-21', '12-22', '12-23', '12-24', '12-25', '12-26', '12-27', '12-28',],
        }, {
          values:['6时', '7时', '8时', '9时'],
        }, {
          values:['10分', '11分', '12分', '13分'],
        }]
    },
    dataChange(values) {
      console.log(values[0].children[0])
      // this.classData[1].values = values[0].children
      this.$refs.picker.setSlotValues(1, values[0].children)
    }
  }
}
</script>
<style scoped>
.card {
  padding: 44px 16px 0 16px;
}
.title {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.custom-name {
  background: red;
}
.content {
  height: 44px;
  line-height: 44px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
}
</style>