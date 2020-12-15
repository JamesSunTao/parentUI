#button

## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| type | 按钮类型 | string | primary/default | default |
| size | 按钮尺寸 | string | large/normal/small | normal |
| color | 按钮颜色 | string | - | - |
| plain | 按钮是否为朴素按钮 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |
| loading | 是否加载中 | boolean | - | false |
| loading-text | 加载状态提示文字 | string | - | - |

## Event

|  事件名称 | 说明 | 回调参数  |
| ------------ | ------------ | ------------ |
| click | 点击事件 按钮状态不为加载和禁用时触发 |	event |