#rate打分

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|curIndex|当前激活选项索引|Number|0-5|-1|
|disabled|当前是否可以继续修改打分状态|Boolean| true/false |-|
|evaluated|当前是有已评价，只有已评价状态下才展示打分状态|Boolean| true/false |false|

#### 自定义面板
提供title插槽，name：rate_title，用h3标签自带默认样式，支持自定义
描述信息插槽：rate_intro，className = “star-intro”，自带默认样式，支持自定义


## Event
|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| starDisabledFun | 禁止状态下出发 | - |
| starFun | 点击打分选项出发 | 当前分数，默认1-5 |
