#image-preview

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| data | 图片DOM列表 | Array| - | [] |
| imageIndex | 当前图片的下标 | Number| - | 0 |
| showPreview | 是否展示图片预览 | Boolean| - | false |
| showBack | 是否展示返回按钮 | Boolean| true/false | false |
| showDelete | 是否展示删除按钮 | Boolean| true/false | false |


## Event

|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| close | 预览关闭（必传） | 	- |
| delete | 删除预览图片（需要删除按钮时需传） | items 图片依次删除的位置  |
| beforeDelete | 删除预览图片前事件（可选）,必须return一个Promise | - |