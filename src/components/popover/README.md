popover
## Attributes
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|isShow|控制组件显示隐藏|Boolean|true/false|false|
|actions|菜单列表,具体数值，见下表|Array| - |null|
|cancelText|是否展示取消按钮|String| - |-|
|description|是否展示头部描述|String| - |-|
|options|title配置，具体可选值见下表|Object| - |-|

### actions
|  参数 | 说明 | 类型  | 可选值  | 默认值  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|name| 菜单项文案 |String|-|-|
|tag| 菜单项唯一标示 |String|-|-|
|color| 菜单项文案自定义颜色 |String|#ffffff|-|
|disabled| 菜单项是否禁用 |Boolean|true/false|false|
|className| 菜单项自定义className |String||-|
|description| 菜单项展示描述信息 |String||-|
#### 自定义面板