# ShortVideoContaniner （短视频容器组件）
#### 用于视频上下滑动的公共组件，效果类似抖音

## Attributes
|  参数 | 参数  | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| videolist | 视频列表,必填，具体见下表 | Array |  —  | —  |
| allowProgress  | 是否开启进度条可拖拽  | Boolean  |  true/false  | false  |
| delayClick |  视频区域单击时长(ms) | Number  | —  | 10  |
| screenConfig  | 视频播放区域配置，具体见下表 | Object  | —  |  — |
| blur  | 是否开启背景高斯模糊  | Boolean  | true/false  |  false |


### videolist Attributes
| 参数  | 说明 |  类型 | 可选值  | 默认值 |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| url  | 视频地址  | String  | —  | — |
| coverImage  | 视频封面 地址 | String  |—  | — |

### screenConfig
#### 指定视频横竖屏字段
| 参数  | 说明  | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| screenTypeCode  | 指定视频横竖屏KEY  | String  | — | horizontal  |
| screenType  | 指定视频横竖屏Value  | String  | —  | 1  |

## Events
| 事件名称  | 说明  | 回调参数  |
| ------------ | ------------ | ------------ |
|  loadstart |  当前视频加载完毕时 | 一个参数，当前视频详情数据  |
| canplay  |  当前视频可以播放时 |  一个参数，当前视频详情数据 |
| durationchange  | 当前视频时长变化时  | 两个参数，1、当前时长，2、当前视频详情  |
| timeupdate  |  当前的播放位置已更改时，播放时间更新 | 两个参数，1、当前时长，2、当前视频详情  |
| ended  | 视频播放完毕  |   一个参数，当前视频详情数据 |
| play  | 视频播放时  |   两个个参数，1、当前视频详情数据，2、Option，当前视频索引，播放视频是否为当前索引值 |
| slidingup  | 上滑动时  |   一个参数，当前滑动的索引 |
| slidingdown  | 下滑动时  |   一个参数，当前滑动的索引 |
| dbvedioclick  | 视频区域双击事件,delayClick需要有值 | —   |
