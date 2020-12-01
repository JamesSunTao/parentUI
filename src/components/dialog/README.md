#dialog 弹窗

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|iShow|控制是否打开弹窗|Boolean|true/false|false|
|title|弹窗标题文本 |String|-|-|
|text|弹窗二级文本 |String|-|-|
|hasCancel|是否展示关闭按钮 |Boolean|true/false|true|
|cancelFn|关闭按钮回调函数 |Function|-|null|
|cancel|关闭按钮文案 |String|-|-|
|confirm|确定按钮文案 |String|-|-|
|confirmFn|确定按钮回调函数 |Function|-|null|
|textList|多行文本展示数组列表，具体见下表 |Array|-|-|
|textCenter| 文字是否居中展示，默认左对齐 |Boolean|true/false|false|
|titleLeft|标题是否左对齐，默认居中 |Boolean|true/false|false|
|icon| 弹窗自定义图标 |String|-|-|
|iconClass| 自定义图标的className |String|-|-|
|hiddenButton| 是否隐藏按钮 |Boolean|true/false|false|


### textList
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|content| 文案 |String|-|-|
|style| 当前行文案自定义样式 |Object|-|-|

