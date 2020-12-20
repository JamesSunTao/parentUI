#image

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| src | 图片url | string| - | - |
| alt | 图片alt | string| - | - |
| fit | 图片模式 | string| contain, cover, fill, none | fill 
| width | 图片宽 | number,string| - | - |
| height | 图片高 | number,string| - | - |
| radius | 图片圆角半径 | string| - | - |
| download | 是否支持长按保存 | Boolean| - | true |
| showError | 显示错误样式，需要设置width和height | Boolean| - | false |
| showLoading | 显示加载样式，需要设置width和height | Boolean| - | false |


## Event

|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| load | load完成事件 | 	image |
| error | 图片加载失败 |   -  |