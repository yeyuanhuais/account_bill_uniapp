<template>
  <cuCustom bg-color="bg-gradual-blue" :is-back="true">
    <template #content>分类</template>
  </cuCustom>
  <div class="classification">
    <scroll-view scroll-x class="bg-white nav classView">
      <view class="flex text-center">
        <view
          v-for="(item, index) in tabData"
          :key="index"
          class="cu-item flex-sub"
          :class="index == tabCur ? 'text-blue cur' : ''"
          @click="tabSelect(index)"
        >
          {{ item }}
        </view>
      </view>
      <itemClass :list="list" :loading="loading" @on-update="onUpdate" @on-create="onCreate" @on-delete="onDelete" />
    </scroll-view>
  </div>
</template>

<script setup>
import cuCustom from "@/component/cuCustom.vue";
import request from "@/utils/request";
import { ref, onMounted } from "vue";
import { onShow } from "@dcloudio/uni-app";
import itemClass from "./comps/itemClass.vue";

const tabData = ref(["收入", "支出", "转账"]);
const list = ref([]);
const tabCur = ref(0);
const loading = ref(false);

const getList = (type = 0) => {
  loading.value = true;
  request
    .get("/api/classification/getAll", { type })
    .then((res) => {
      list.value = res.list;
    })
    .finally(() => {
      loading.value = false;
    });
};
const tabSelect = (index) => {
  tabCur.value = index;
  getList(index);
};
const onCreate = () => {
  uni.navigateTo({
    url: "/pages/more/classification/comps/addOrEdit",
    success: (res) => {
      res.eventChannel.emit("selectObj", { type: tabCur });
    },
  });
};
const onUpdate = (value) => {
  uni.navigateTo({
    url: "/pages/more/classification/comps/addOrEdit",
    success: (res) => {
      res.eventChannel.emit("selectObj", { ...value, type: tabCur });
    },
  });
};
const onDelete = ({ id }) => {
  uni.showModal({
    title: "提示",
    content: "是否删除该分类",
    confirmColor: "#e54d42",
    success(res) {
      if (res.confirm) {
        request
          .post("/api/classification/delete", { id })
          .then(() => {
            uni.showToast({ title: "成功", mask: true, icon: "success" });
            getList();
          })
          .finally(() => {});
      } else if (res.cancel) {
        console.log("用户点击取消");
      }
    },
  });
};
onMounted(() => {
  // getList();
});
onShow(() => {
  getList();
});
</script>

<style scoped lang="less">
.classView {
  position: relative;
}
</style>
