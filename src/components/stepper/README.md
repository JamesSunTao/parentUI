#stepper

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| vModel | 当前输入的值 | Number/String| - | - |
| min | 最小值 | Number/String| - | 1 |
| max | 最大值 | Number/String| - | 10 |
| defaultValue | 初始值，当 v-model 为空时生效 | Number/String| - | 1 |
| step | 步长，每次点击时改变的值 | Number/String| - | 1 |
| name | 标识符，可以在 change 事件回调参数中获取 | Number/String| - | '' |
| inputWidth | 输入框宽度，默认单位为 px | Number/String| - | 32 |
| buttonSize | 按钮大小以及输入框高度，默认单位为 px | Number/String| - | 28 |
| decimalLength | 固定显示的小数位数 | Number/String| - | 1 |
| theme | 样式风格 | square/round| - | square |
| disabled | 是否禁用步进器 | Boolean| - | false |
| disablePlus | 是否禁用增加按钮 | Boolean| - | false |
| disableMinus | 是否禁用减少按钮 | Boolean| - | false |
| disableInput | 是否禁用输入框 | Boolean| - | false |
| longPress | 是否开启长按手势 | Boolean| - | false |
| beforeChange | 输入值变化前的回调函数，返回 false 可阻止输入，支持返回 Promise | (value) => boolean / Promise| - | false |


## Event

|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| change | 当绑定值变化时触发的事件 |  value: string, detail: { name: string } |
| overlimit | 点击不可用的按钮时触发 | - |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| focus | 输入框聚焦时触发 |  event: Event |
| blur | 输入框失焦时触发 |  event: Event |