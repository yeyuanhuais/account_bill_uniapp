<template>
  <cuSkeleton :loading="props.loading" avatar multiple>
    <view class="cu-list menu-avatar">
      <view
        v-for="(item, index) in props.list"
        :key="item.id"
        class="cu-item"
        :class="modalName == 'move-box-' + index ? 'move-cur' : ''"
        :data-target="`move-box-${index}`"
        @touchstart="listTouchStart"
        @touchmove="listTouchMove"
        @touchend="listTouchEnd"
      >
        <view class="cu-avatar round lg"> <iconfont :name="item.icon" size="100rpx" /></view>
        <view class="content">
          <view class="text-grey">{{ item.name }}</view>
          <view class="text-gray text-sm"> {{ item.total || 0 }}&nbsp;笔交易 </view>
        </view>
        <view class="move">
          <view class="bg-grey" @click="onUpdate(item)">编辑</view>
          <view class="bg-red" @click="onDelete(item)">删除</view>
        </view>
      </view>
    </view>
  </cuSkeleton>
  <view v-if="!modalName" class="classAdd animation-slide-right" @click="onCreate()">
    <text class="cuIcon-roundaddfill text-blue text-shadow-blue" style="font-size: 100rpx"></text>
  </view>
</template>

<script setup>
import iconfont from "@/component/iconfont/iconfont.vue";
import { ref } from "vue";
import cuSkeleton from "@/component/cuSkeleton.vue";

const props = defineProps({
  list: { type: Array, default: () => [] },
  loading: { type: Boolean, default: false },
});
const emit = defineEmits(["on-update", "on-create", "on-delete"]);
const modalName = ref(null);
const startX = ref(""); // 滑动开始x轴的位置
const touchDirection = ref(null); // 滑动方向
const listTouchStart = (e) => {
  startX.value = e.touches[0].pageX;
};

// ListTouch计算方向
const listTouchMove = (e) => {
  touchDirection.value = e.touches[0].pageX - startX.value > 0 ? "right" : "left";
};

// ListTouch计算滚动
const listTouchEnd = (e) => {
  if (touchDirection.value === "left") {
    modalName.value = e.currentTarget.dataset.target;
  } else {
    modalName.value = null;
  }
  touchDirection.value = null;
};
const onUpdate = (value) => {
  emit("on-update", value);
};
const onCreate = (value) => {
  emit("on-create", value);
};
const onDelete = (value) => {
  emit("on-delete", value);
};
</script>

<style scoped lang="less">
.cu-avatar {
  background-color: transparent;
}
.cu-item {
  margin: 0;
}
.classAdd {
  position: fixed;
  bottom: 7%;
  right: 3%;
}
</style>
