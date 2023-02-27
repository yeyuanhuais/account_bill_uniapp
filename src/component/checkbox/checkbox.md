
#### 方法说明：

方法名 | 可传参数 | 说明
----- | ---- | -----
set() | Object | 设置组件的样式及数据，详情请看下面 set() 方法参数详解
get() | 无 | 返回已选择的数据，未选择时返回 null
checkAll() | 无 | 设置全部选中，该功能在单选框模式下无效
cancelAll() | 无 | 设置全部取消选中，该功能在单选框模式下为取消当前选中项
invertAll() | 无 | 设置全部反向选中，该功能在单选框模式下为取消当前选中项
reset() | 无 | 重置，恢复选中状态
disabled() | true / false / undefined |是否禁用组件， true:禁用、false:取消禁用，undefined:返回当前组件是否禁用状态(true 表示已禁用)

#### 参数：

参数名 | 类型 | 默认值 | 说明
----- | ---- | ----- | -----
type  | String | checkbox | 组件类别（单选框/复选框），可选值 radio / checkbox
column | Number | | 分栏设置，可选值 1 / 2 / 3 / 不设置时为流式自动布局
value | Number |  | 默认选中项，在 radio 时为String,在 checkbox Array,
options  | Array | | 组件渲染的列表数据，数据参数请看下面 list 参数详解



#### list参数：

参数名 | 类型 | 说明
----- | ---- | -----
value  | String or Number | 值
label  | String | 单选框/复选框的显示文字，必传参数
checked | Boolean | 默认选中项，仅支持在 checkbox 时有效，设置为 true 时默认选中，可传参数

#### 绑定事件：
事件名 | 说明
----- | -----
@change | 选项改变时触发，可接收一个参数 <code>data</code> 返回当前已选择的数据
