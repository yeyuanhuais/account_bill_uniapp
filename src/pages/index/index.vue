<template>
  <view class="pages">
    <cuCustom bg-color="bg-gradual-blue" :is-back="false">
      <template #content>{{ barTitle }}</template>
    </cuCustom>
    <property v-if="pageCur == 'property'" class="minHeight"></property>
    <report v-if="pageCur == 'report'" class="minHeight"></report>
    <bill v-if="pageCur == 'bill'" class="minHeight"></bill>
    <more v-if="pageCur == 'more'" class="minHeight"></more>
    <view class="bg-white shadow cu-bar tabbar foot">
      <block v-for="item in menuList" :key="item.id">
        <view class="action" :data-cur="item.id" @click="navChange">
          <view class="cuIcon-cu-image">
            <iconfont v-if="pageCur == item.id" class="barIcon" :name="item.icon" size="45rpx" fill="#0081ff" />
            <iconfont v-else class="barIcon" :name="item.icon" size="45rpx" fill="#aaaaaa" />
          </view>
          <view :class="pageCur === item.id ? 'text-blue' : 'text-gray'" class="fs30">{{ item.name }}</view>
        </view>
      </block>
    </view>
  </view>
</template>

<script setup>
import iconfont from "@/component/iconfont/iconfont.vue";
import { ref, computed, getCurrentInstance } from "vue";
import cuCustom from "@/component/cuCustom.vue";
import property from "@/pages/property";
import report from "@/pages/report";
import bill from "@/pages/bill";
import more from "@/pages/more";

const customBar = ref(getCurrentInstance().appContext.config.globalProperties.CustomBarPxGlobal);
const pageCur = ref("more");
const menuList = ref([
  {
    name: "资产",
    icon: "icon_zhanghuzichan",
    id: "property",
  },
  {
    name: "报表",
    icon: "icon_baobiao",
    id: "report",
  },
  {
    name: "账单",
    icon: "icon_zhangdan",
    id: "bill",
  },
  {
    name: "更多",
    icon: "icon_yonghu",
    id: "more",
  },
]);
const barTitle = computed(() => {
  return menuList.value.filter((item) => item.id === pageCur.value)[0].name;
});
const navChange = (e) => {
  pageCur.value = e.currentTarget.dataset.cur;
};
</script>

<style lang="css" scoped>
.pages {
  height: calc(100vh - v-bind(customBar));
}
.minHeight {
  /* min-height: calc(100vh - v-bind(customBar)- (100upx + env(safe-area-inset-bottom) / 2)); */
}
.cuIcon-cu-image {
  margin: 0 auto;
}

.barIcon {
  width: 36upx;
  height: 36upx;
  display: inline-block;
}

.fs30 {
  font-size: 30rpx;
}
</style>
