#list

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|header|表头|String|-|-|
|border|item下边线|Boolean|-|-|
|fillet|圆角|Boolean|-|-|
## Event

#list-item

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|leftIconType|左icon类型|String|set｜active｜task｜coupon|-|
|leftIconUrl|左icon自定义图片|String|-|-|
|title|标题|String|-|-|
|remark|辅助文字|String|-|-|
|remarkStyle|辅助文字自定义样式|Object|-|-|
|description|描述|String|-|-|
## Event

|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| click | item点击事件 | 传入的参数 |


## list-item slot

|  名称 | 说明 
| ------------ | ------------
| right-slot | item右边插槽，可自定义传入
