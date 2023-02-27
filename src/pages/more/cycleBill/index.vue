<template>
  <cuCustom bg-color="bg-gradual-blue" :is-back="true">
    <template #content>周期帐</template>
  </cuCustom>
  <div class="cycleBill padding-xs">
    <cuSkeleton :loading="loading" multiple>
      <view class="cu-list menu margin-xs">
        <view
          v-for="(item, index) in list"
          :key="item.id"
          class="cu-item"
          :class="[modalName == 'move-box-' + index ? 'move-cur' : '', item.status == 2 ? 'text-gray' : 'text-black']"
          :data-target="`move-box-${index}`"
          @touchstart="listTouchStart"
          @touchmove="listTouchMove"
          @touchend="listTouchEnd"
          @click="onListClick(item)"
        >
          <view class="content">
            <view class="">{{ item.billTypeName }}•{{ item.remark }}</view>
            <view class="text-sm"> {{ statusFilter(item.status) }} </view>
          </view>
          <view class="action">
            <view class="text-lg">{{ item.money }}</view>
            <view class="text-sm text-right">{{ item.finishTotal }}/{{ item.total }}</view>
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
  </div>
</template>

<script setup>
import cuSkeleton from "@/component/cuSkeleton.vue";
import cuCustom from "@/component/cuCustom.vue";
import request from "@/utils/request";
import { ref, onMounted, getCurrentInstance } from "vue";
import { onShow } from "@dcloudio/uni-app";

const customBar = ref(getCurrentInstance().appContext.config.globalProperties.CustomBarPxGlobal);

const list = ref([]);
const tabCur = ref(0);
const loading = ref(false);
const modalName = ref(null);
const startX = ref(""); // 滑动开始x轴的位置
const touchDirection = ref(null); // 滑动方向
/* ======== 状态枚举过滤 ======== */
const statusFilter = (key) => {
  switch (key) {
    case 0:
      return "待执行";
    case 1:
      return "执行中";
    case 2:
      return "已完成";
    default:
      return "";
  }
};
const getList = (type = 0) => {
  loading.value = true;
  request
    .get("/api/cycleBill/getAll", { type })
    .then((res) => {
      list.value = res.list;
    })
    .finally(() => {
      loading.value = false;
    });
};

/* ======== ListTouch开始位置 ======== */
const listTouchStart = (e) => {
  startX.value = e.touches[0].pageX;
};

/* ======== ListTouch计算方向 ======== */
const listTouchMove = (e) => {
  touchDirection.value = e.touches[0].pageX - startX.value > 0 ? "right" : "left";
};

/* ======== ListTouch计算滚动 ======== */
const listTouchEnd = (e) => {
  if (touchDirection.value === "left") {
    modalName.value = e.currentTarget.dataset.target;
  } else {
    modalName.value = null;
  }
  touchDirection.value = null;
};
/* ======== 新增 ======== */
const onCreate = () => {
  uni.navigateTo({
    url: "/pages/more/cycleBill/comps/addOrEdit",
    success: (res) => {
      res.eventChannel.emit("selectObj", {});
    },
  });
};
/* ======== 编辑 ======== */
const onUpdate = (value) => {
  uni.navigateTo({
    url: "/pages/more/cycleBill/comps/addOrEdit",
    success: (res) => {
      res.eventChannel.emit("selectObj", { ...value, type: tabCur });
    },
  });
};
/* ======== 删除 ======== */
const onDelete = ({ id }) => {
  uni.showModal({
    title: "提示",
    content: "是否删除该周期帐（不会删除该周期生成的账单）",
    confirmColor: "#e54d42",
    success(res) {
      if (res.confirm) {
        request
          .post("/api/cycleBill/delete", { id })
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
/* ======== 点击跳转账单 查询该周期帐 ======== */
const onListClick = (value) => {};
onMounted(() => {
  // getList();
});
onShow(() => {
  getList();
});
</script>

<style scoped lang="less">
.cycleBill {
  background-color: #f1f5f9;
  min-height: calc(100vh - v-bind(customBar));
}
.classView {
  position: relative;
}
.cu-avatar {
  background-color: transparent;
}
.cu-item {
  margin: 20upx 0;
  border-radius: 30upx;
}
.cu-list.menu > .cu-item {
  padding: 20upx 30upx;
}
.classAdd {
  position: fixed;
  bottom: 7%;
  right: 3%;
}
</style>
