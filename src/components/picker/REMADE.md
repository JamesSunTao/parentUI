#picker 选择器

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|visible| 控制显示与隐藏 |Boolean  | true/false |false|
|title | 标题|String|-|-|
|confirm | 确定按钮文案|String|-|确定|
|cancel | 取消按钮文案|String|-|取消|
|type |类型|String|date province city area region custom|region|
|customValues |自定义数据|Array|- |-|
|code |当type 为 city area 对应上级|String| type 为 city area 时必填 |-|
|start |当type 为date 起始年份|Number| - |2004|
|end |当type 为date 终止年份|Number| - |2020|
|defaultValue |默认值|Array| - |-|
|option |可选配置|Object| - |-|

### option
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|key| 数据字段key |String  | - |name|
|code | 数据对应唯一标示 |String|-|code|
## Event
| 事件名称  | 说明  | 回调参数  |
| ------------ | ------------ | ------------ |
|  changed |  数据发生改变 | 当前值 |
|  close |  点击关闭按钮 | -  |
|  closed |  picker关闭后 | 当前值  |
|  confirm-fn |  点击确认按钮 | 当前值  |