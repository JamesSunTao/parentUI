#notify 消息提示

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|type|类型，目前分为两种，单行普通提示和多行提示 |String  |normal｜ multi|normal|
|message | 提示文案，最多两行，超出省略号|String|-|-|
|icon | 自提示文案前的icon，有则展示。默认无icon|String|-|-|
|button | 多行类型下展示按钮，有则展示，默认无button|String|-|-|
|close | 多行模式下是否现实关闭按钮|Boolean|true/false|true|

## Event
| 事件名称  | 说明  | 回调参数  |
| ------------ | ------------ | ------------ |
|  handleclick |  多行模式下点击按钮时触发 | -  |
|  closed |  提示框关闭后触发 | -  |