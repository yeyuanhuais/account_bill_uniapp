<template>
  <view class="container grid" :class="'col-' + props.column">
    <view v-for="(v, i) in list" :key="i" :class="props.radius ? 'radius-xl' : ''">
      <view
        class="item"
        :class="{
          active: (props.type == 'radio' && index == v.value) || (props.type == 'checkbox' && v.checked),
          disabled: props.disabled,
        }"
        :data-i="i"
        @tap="change"
      >
        {{ v.label }}
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, watchEffect, defineExpose, nextTick } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "checkbox",
  }, // 选择框类型 checkbox/radio
  options: {
    type: Array,
    default: () => [],
  }, // 数据 [{value:"1",label:"示例"}]
  disabled: {
    type: Boolean,
    default: false,
  }, // 是否禁用
  radius: {
    type: Boolean,
    default: false,
  }, // 是否禁用
  column: {
    type: Number,
    default: 0,
  }, // 分几列展示  最多5个
  value: {
    type: [String, Array],
    default: "",
  }, // 分几列展示  最多5个
});
const list = ref(props.options);
const index = ref(-1);
const emit = defineEmits(["change"]);
/* 获取值 */
const get = () => {
  /* 单选框 */
  if (props.type === "radio") {
    if (index.value >= 0) {
      return list.value[index.value];
    }
    return null;
  }

  const arr = [];
  list.value.forEach((item) => {
    if (item.checked === true) {
      arr.push(item);
    }
  });
  return arr.length > 0 ? arr : null;
};
/* 切换 */
const change = (e) => {
  if (props.disabled) {
    return;
  }
  const i = Number(e.currentTarget.dataset.i);
  /* 单选框 */
  if (props.type === "radio") {
    index.value = i;
    nextTick(() => {
      emit("change", get());
    });
    return;
  }
  /* 复选框 */
  if (list.value[i].checked) {
    list.value[i].checked = false;
  } else {
    list.value[i].checked = true;
  }
  nextTick(() => {
    emit("change", get());
  });
};
/* 全部选中 */
const checkAll = () => {
  if (props.disabled) {
    return;
  }
  if (props.type === "radio") {
    return null;
  }
  list.value.forEach((item, ind) => {
    list.value[ind].checked = true;
  });
};
/* 取消全部选中 */
const cancelAll = () => {
  if (props.disabled) {
    return;
  }
  if (props.type === "radio") {
    index.value = -1;
    return null;
  }
  list.value.forEach((item, ind) => {
    list.value[ind].checked = false;
  });
};
/* 反选全部 */
const invertAll = () => {
  if (props.disabled) {
    return;
  }
  if (props.type === "radio") {
    index.value = -1;
    return null;
  }
  list.value.forEach((item, ind) => {
    list.value[ind].checked = !item.checked;
  });
};
/* 重置 */
const reset = () => {
  list.value = JSON.parse(props.options);
};
watchEffect(() => {
  if (props.type === "radio") {
    list.value.forEach((item, ind) => {
      if (item.value === props.value) index.value = ind;
    });
  } else if (props.type === "checkbox") {
    list.value = list.value.map((item) => {
      const valItem = item;
      if (props.value.includes(item.value)) valItem.checked = true;
      return valItem;
    });
  }
});
defineExpose({
  get,
  checkAll,
  cancelAll,
  reset,
  invertAll,
});
</script>

<style lang="less" scoped>
.container {
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: flex-start;
  // align-items: flex-start;
  // align-content: flex-start;
  // margin-right: -20rpx;
  font-size: 28rpx;
  text-align: center;

  & > view {
    margin-bottom: 20rpx;
    padding-right: 20rpx;
    box-sizing: border-box;
  }

  .item {
    line-height: 68rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    border: #e5e5e5 solid 1px;
    background-color: #fff;
    color: #333;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    // 未选中状态下的禁用样式
    &.disabled {
      background-color: #f1f1f1;
      color: #d8d8d8;
    }

    &.active {
      background-color: #f5fff9;
      color: #42b983;
      border: #42b983 solid 1px;

      &::before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background-color: #42b983;
        position: absolute;
        right: -1px;
        bottom: -1px;
        z-index: 1;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      }
      &::after {
        content: "";
        display: block;
        width: 3px;
        height: 6px;
        border-right: #fff solid 2px;
        border-bottom: #fff solid 2px;
        transform: rotate(25deg);
        position: absolute;
        right: 3px;
        bottom: 3px;
        z-index: 2;
      }

      // 选中状态下的禁用样式
      &.disabled {
        background-color: #f1f1f1;
        color: #d8d8d8;
        border: #e5e5e5 solid 1px;

        &::before {
          background-color: #d9d9d9;
        }
      }
    }
  }
}
</style>
