#checkbox

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|value/v-model|绑定数值|Boolean/string/number|-|-|
|label|选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效)|string/number/boolean| - |-|
|true-label|switch 的宽度（像素）|number| - |51|
|false-label|switch 打开时的值|String| - |-|
|disabled|switch 关闭时的值|bealoon| - |-|
|size|Checkbox 的尺寸|String| small|-|
|checked|当前是否勾选|boolean| - |false|
## Event

|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| change | switch 状态发生变化时的回调函数 | 	更新后的值 |