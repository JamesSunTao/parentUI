# videoplayer 视频播放器

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|fullScreen| 是否全屏 |Boolean |true/false|true|
|height | 视频高度 |String |-|200px|
|width | 视频宽度 |String |-|auto|
|coverUrl | 视频封面| String|-|默认vipkid商标图|
|videoUrl | 视频资源路径| String|-|-|
|autoplay| 是否自动播放，注意：页面打开无法自动播放,可在打开弹窗中自动播放 |Boolean |true/false|false|
|loop | 循环播放| Boolean|true/false|false|
|controls | 是否展示默认控制器，为false时，展示默认可拖拽进度条| Boolean|true/false|true|

|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| play | 视频播放时触发 | 	- |
| pause | 视频暂停时触发 | 	- |
| loadstart | 视频元素加载时触发 | 	- |
| durationchange | 播放时长改变时触发 | 当前播放时长 |
| canplay | 视频已准备好开始播放时触发 | - |
| videoclose | 全屏播放时，关闭播放视图时触发 | - |
