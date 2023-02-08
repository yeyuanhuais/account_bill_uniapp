<template>
  <view>
    <view class="cu-custom" :style="[{ height: customBar + 'px' }]">
      <view
        class="fixed cu-bar"
        :style="style"
        :class="[props.bgImage != '' ? 'none-bg text-white bg-img' : '', props.bgColor]"
      >
        <view v-if="props.isBack" class="action" @tap="backPage">
          <text class="cuIcon-back"></text>
          <slot name="backText"></slot>
        </view>
        <view class="content" :style="[{ top: statusBar + 'px' }]">
          <slot name="content"></slot>
        </view>
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script setup>
import { defineProps, ref, computed, getCurrentInstance } from "vue";

const statusBar = ref(getCurrentInstance().appContext.config.globalProperties.StatusBarGlobal);
const customBar = ref(getCurrentInstance().appContext.config.globalProperties.CustomBarGlobal);
const props = defineProps({
  bgColor: { type: String, default: "" },
  isBack: {
    type: [Boolean, String],
    default: false,
  },
  bgImage: { type: String, default: "" },
});
const style = computed(() => {
  let styleVal = `height:${customBar.value}px;padding-top:${statusBar.value}px;`;
  if (props.bgImage) {
    styleVal = `${styleVal}background-image:url(${props.bgImage});`;
  }
  return styleVal;
});
const backPage = () => {
  if (getCurrentPages().length < 2 && typeof __wxConfig !== "undefined") {
    const url = `/${__wxConfig.pages[0]}`;
    return uni.redirectTo({ url });
  }
  uni.navigateBack({
    delta: 1,
  });
};
</script>

<style></style>
