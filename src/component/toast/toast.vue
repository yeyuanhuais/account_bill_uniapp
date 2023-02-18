<template>
  <view class="toast-fixed-center" hidden="{{!loading}}" style="z-index: 99">
    <view
      class="radius-lg padding animation-slide-top text-lg {{statusVal == 'success' ? 'bg-green light':'bg-red light'}}"
    >
      <text class="cuIcon-info"></text> {{ messageVal }}
    </view>
  </view>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "success",
  },
});
const loading = ref(false);
const messageVal = ref("");
const statusVal = ref("success");

/**
 * 轻提示回调函数
 */
const end = () => {
  wx.showToast({
    title: "触发回调方法",
  });
};

/**
 * 轻提示展示
 * @param {*} status
 * @param {*} message
 * @param {*} time
 * @param {*} fun
 */
const setShow = (status, message, time = 2000, fun = false) => {
  console.log("%c status, message", "font-size:13px; background:pink; color:#bf2c9f;", status, message);
  loading.value = true;
  try {
    messageVal.value = message;
    statusVal.value = status;
    setTimeout(() => {
      loading.value = false;
      // 触发回调函数
      if (fun) {
        end();
      }
    }, time);
  } catch {
    loading.value = false;
  }
};
defineExpose({
  setShow,
});
</script>
