<template>
  <template v-if="props.loading">
    <view v-for="num in props.multiple ? 6 : 1" :key="num" class="box padding">
      <view v-if="props.avatar" class="bg avatar"> </view>
      <view class="column">
        <view
          v-for="(item, index) in props.column"
          :key="item"
          class="bg list"
          :class="props.active ? 'active' : ''"
          :style="{
            width: props.columnWidth[index],
            height: index + 1 == column && props.endHeight ? props.endHeight : '',
          }"
        >
        </view>
      </view> </view
  ></template>
  <slot v-else></slot>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  column: {
    type: Number,
    default: 3,
  },
  columnWidth: {
    type: Array,
    default: () => ["60%", "90%", "70%"],
  },
  endHeight: {
    type: String,
    default: "",
  },
  avatar: Boolean,
  multiple: Boolean, // 是否渲染多个
});
</script>

<style scoped>
.box {
  width: 100%;
  overflow: hidden;
}

.column > view {
  height: 36rpx;
  margin-bottom: 15rpx;
}

.column {
  display: flex;
  flex-direction: column;
}

.bg {
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
}

.active {
  animation: loading 1.4s ease infinite;
}

@keyframes loading {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

/* 扩展头像功能 */
.avatar {
  border-radius: 50%;
  width: 100rpx;
  height: 100rpx;
  float: left;
  margin-right: 20rpx;
}
</style>
