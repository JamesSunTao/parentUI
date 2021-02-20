field
## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|v-model|绑定数值|Boolean/string/number|-|-|
|placeholder||Boolean|-|true|
|label|是否支持模糊层|Boolean|-|true|
|placeholder|输入框为空时占位符|String|-|-|
|type|可设置为任意原生类型, 如 number idcard textarea digit|string|-|text|
|required|是否显示表单必填星号|Boolean|-|false|
|maxLength|最大输入长度，设置为 -1 的时候不限制最大长度|Number|-|-1|
|inputStyle|自定义输入框样式|Object|-|true|
|labelStyle|自定义说明样式|Object|-|true|
|readonly|是否只读|Boolean|-|false|
|disabled|是否禁停输入|Boolean|-|false|
## Event
|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
|blur|失焦事件|-|
|input|input事件|-|
|focus|聚焦事件|-|
## Slot
|  名称 | 说明 |
| ------------ | ------------ | ------------ |
|button|自定义输入框尾部按钮|-|
|left-icon|	自定义输入框头部图标|-|
|right-icon|自定义输入框尾部图标|-|

