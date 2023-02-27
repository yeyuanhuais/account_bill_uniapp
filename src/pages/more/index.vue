<template>
  <view class="bg-gray more">
    <!-- 顶部个人信息 -->
    <view class="bg-white">
      <view class="flex padding">
        <view class="padding-lr-xs">
          <view
            class="cu-avatar xl round"
            style="
              background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1);
            "
          >
          </view>
        </view>
        <view class="flex text-xl text-black padding-sm align-center">
          <view>啄木鸟</view>
        </view>
      </view>
    </view>
    <!-- 基本数据 -->
    <view class="grid cu-list col-3 no-border padding-lr-xs radius-lg-bottom">
      <view class="cu-item">
        <view class="text-black text-bold text-xxl"> 6 </view>
        <text>记账天数</text>
      </view>
      <view class="cu-item">
        <view class="text-black text-bold text-xxl"> 0 </view>
        <text>交易笔数</text>
      </view>
      <view class="cu-item">
        <view class="text-black text-bold text-xxl"> 4 </view>
        <text>净资产</text>
      </view>
    </view>

    <view class="grid text-black cu-list col-4 no-border margin-lr-sm padding-bottom radius-xl">
      <view v-for="(item, index) in functionList" :key="index" class="cu-item" @click="onClickFun(item.type, item.url)">
        <view :class="`cuIcon-${item.icon} text-${item.color} text-shadow`" style="font-size: 56rpx"> </view>
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const functionList = ref([
  {
    icon: "qrcode",
    color: "blue",
    name: "分类",
    url: "/pages/more/classification/index",
    type: "jump",
  },
  {
    icon: "settings",
    color: "blue",
    url: "/pages/more/cycleBill/index",
    name: "周期帐",
    type: "jump",
  },
  {
    icon: "settings",
    color: "blue",
    name: "月起始日",
  },
  {
    icon: "pulldown",
    color: "blue",
    name: "导入",
    bindtap: "bindCollect",
  },
  {
    icon: "pullup",
    color: "blue",
    name: "导出",
  },
  {
    icon: "exit",
    color: "blue",
    name: "退出",
  },
]);
const onClickFun = (type, data) => {
  if (type === "jump") {
    uni.navigateTo({ url: data });
  }
};
</script>

<style scoped lang="less">
.more {
  min-height: 100%;
}
</style>
