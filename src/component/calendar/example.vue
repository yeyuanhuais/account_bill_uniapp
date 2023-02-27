<template>
  <view>
    <view class="panel">
      <view class="panel-head">选择示例类型：</view>
      <view class="panel-body">
        <button
          v-for="(item, index) in array"
          :key="index"
          :type="pickerIndex == index ? 'primary' : 'default'"
          size="mini"
          :data-index="index"
          @tap="onSelectType"
        >
          {{ item }}
        </button>
      </view>
    </view>
    <view class="panel">
      <view class="panel-head">操作：</view>
      <view class="panel-body">
        <button type="default" size="mini" @tap="getData">获取已选数据</button>
        <button type="default" size="mini" :disabled="disabled" @tap="check">全选</button>
        <button type="default" size="mini" :disabled="disabled" @tap="invert">反选</button>
        <button type="default" size="mini" @tap="cancel">取消全部</button>
        <button type="default" size="mini" @tap="reset">重置</button>
        <button type="default" size="mini" @tap="changeDisabled">{{ disabledCheckbox ? "取消禁用" : "禁用" }}</button>
      </view>
    </view>
    <view class="panel">
      <view class="panel-head">组件演示：</view>
      <view class="panel-body">
        <helang-checkbox
          ref="checkbox"
          :type="type"
          :options="options"
          :disabled="disabledCheckbox"
          :column="column"
          :value="checkboxValue"
          radius
          @change="onChange"
        ></helang-checkbox>
      </view>
    </view>
  </view>
</template>

<script setup>
import helangCheckbox from "@/component/checkbox/index.vue";
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

/* 创建列表数据 */
const creatorList = () => {
  const arr = [];
  for (let i = 1; i < 16; i++) {
    arr.push({
      value: i,
      label: `第${i}项`,
    });
  }
  return arr;
};
const checkbox = ref();
const options = ref(creatorList());
const checkboxValue = ref();
const column = ref(0);
const disabled = ref(false);
const disabledCheckbox = ref(false);
const type = ref("checkbox");
const pickerIndex = ref(-1);
const array = ref([
  "复选框 - 三栏排序",
  "复选框 - 流式排序（最多只能选择5个）",
  "单选框 - 二栏排序",
  "单选框 - 一栏排序",
]);
/* 选择示例类别 */
const selectDemoType = (index) => {
  switch (index) {
    case 0:
      type.value = "checkbox";
      column.value = 3;
      disabled.value = false;
      checkboxValue.value = [1, 3];
      break;
    case 1:
      /* 复选框 流式布局 */
      /*
						给第 1,4,7,9 项添加默认选中
						此处仅为提供演示使用，具体使用参数请查看插件文章说明
					 */
      options.value.forEach((v, i) => {
        if (/^[1|4|7|9]$/.test(i)) {
          options.value[i].checked = true;
        }
      });
      column.value = 0;
      type.value = "checkbox";
      disabled.value = false;
      break;
    case 2:
      type.value = "radio";
      checkboxValue.value = 2;
      column.value = 2;
      disabled.value = true;
      break;
    case 3:
      type.value = "radio";
      checkboxValue.value = 3;
      column.value = 1;
      disabled.value = true;
      break;
    default:
  }
  pickerIndex.value = index;
};
/* 监听选择类型 */
const onSelectType = (e) => {
  let { index } = e.currentTarget.dataset;
  index = parseInt(index, 10);
  selectDemoType(index);
};
/* 获取数据 */
const getData = () => {
  const data = checkbox.value.get(); // 组件返回的数据
  uni.showToast({
    title: "在控制台看数据",
    icon: "none",
    duration: 1000,
    mask: false,
    success: () => {},
  });
};
/* 选项切换事件 */
const onChange = (data) => {};
/* 全选 */
const check = () => {
  checkbox.value.checkAll(); // 该功能在单选框模式下无效
  getData();
};
/* 取消全选 */
const cancel = () => {
  checkbox.value.cancelAll(); // 该功能在单选框模式下为取消当前选中项
  getData();
};
/* 反选 */
const invert = () => {
  checkbox.value.invertAll(); // 该功能在单选框模式下为取消当前选中项
  getData();
};
// 重置
const reset = () => {
  checkbox.value.reset();
  getData();
};
// 禁用
const changeDisabled = () => {
  disabledCheckbox.value = !disabledCheckbox.value;
};
onLoad(() => {
  selectDemoType(1);
});
</script>

<style lang="less">
page {
  background-color: #f2f2f2;
}
.panel {
  background-color: #fff;
  margin-bottom: 20rpx;
  padding: 20rpx 20rpx 0 20rpx;

  &-head {
    font-size: 28rpx;
  }
  &-body {
    margin-top: 20rpx;
    padding: 20rpx 0 0 0;
    border-top: #eee solid 1px;
    overflow: hidden;

    > button {
      display: block;
      float: left;
      margin: 0 20rpx 20rpx 0;
      border: #007aff solid 1px;
      padding: 0 20rpx;
      border-radius: 0;

      &:after {
        display: none;
      }
    }
  }
}
</style>
