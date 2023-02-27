<template>
  <cuCustom bg-color="bg-gradual-blue" :is-back="true">
    <template #content>{{ formData?.id ? "编辑" : "添加" }}分类</template>
  </cuCustom>
  <view class="cu-form-group margin-tb solid-bottom">
    <iconfont v-if="formData.icon" :name="formData.icon" size="90rpx" />
    <input class="margin-left" placeholder="分类名称" :value="formData.name" @change="onNameChange" />
  </view>
  <view class="flex flex-wrap justify-start padding-lr-xs">
    <template v-for="(item, index) in iconData" :key="index">
      <view @click="onIconChange(item)">
        <iconfont
          :name="item"
          size="90rpx"
          class="margin-bottom margin-left basis-xxs flex justify-center align-center"
        />
      </view>
    </template>
  </view>
  <view class="cu-bar btn-group">
    <button class="cu-btn bg-green shadow-blur round" @click="onReset">重置</button>
    <button class="cu-btn bg-blue shadow-blur round" @click="onSumbit">保存</button>
  </view>
</template>

<script setup>
import iconfont from "@/component/iconfont/iconfont.vue";
import cuCustom from "@/component/cuCustom.vue";
import request from "@/utils/request";
import { getCurrentInstance, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const iconData = [
  "icon_yuer",
  "icon_shumachanpin",
  "icon_yinleyule",
  "icon_hunyinlianai",
  "icon_yule",
  "icon_jiaoyu",
  "icon_jiadian",
  "icon_yundong",
  "icon_jiaju",
  "icon_qicheyongpin",
  "icon_shujijiaocai",
  "icon_youxi",
  "icon_liwu",
  "icon_xiuliweihu",
  "icon_chongwu",
  "icon_lvyoudujia",
  "icon_jiaotong",
  "icon_traffic",
  "icon_tour",
  "icon_canyin",
  "icon_yiban",
  "icon_lingshi",
  "icon_maicai",
  "icon_riyongpin",
  "icon_shuiguo",
  "icon_yiwu",
  "icon_dianying",
  "icon_entertainment",
  "icon_huazhuangpin",
  "icon_hongbao",
  "icon_yinpin",
  "icon_medicine",
  "icon_fangzu",
  "icon_yaopin",
  "icon_xinyongqia",
  "icon_salary",
  "icon_jiechu",
  "icon_jieru",
  "icon_touzizhongxin",
  "icon_investment",
  "icon_winning",
  "icon_smoke_wine",
  "icon_phone",
  "icon_shopping",
  "icon_makeup",
  "icon_other",
  "icon_fuel",
  "icon_intrest",
  "icon_donate",
  "icon_bonus",
  "icon_business",
  "icon_qianbao",
  "icon_yinhangka",
  "icon_shoukuanma",
  "icon_qiankuan",
  "icon_shoukuan",
  "icon_daikuan",
];
const editFormData = ref({});
const formData = ref({});
const onIconChange = (val) => {
  formData.value = { ...formData.value, icon: val };
};
const onNameChange = ({ detail }) => {
  formData.value = { ...formData.value, name: detail.value };
};

const onReset = () => {
  formData.value = { ...editFormData.value };
};
const onSumbit = () => {
  const url = formData.value.id ? "/api/classification/update" : "/api/classification/create";
  request
    .post(url, {
      name: formData.value.name,
      icon: formData.value.icon,
      type: formData.value.type,
      id: formData.value.id || undefined,
    })
    .then(() => {
      uni.showToast({ title: "成功", mask: true, icon: "success" });
      uni.navigateBack({
        delta: 1,
      });
    })
    .finally(() => {});
};
onLoad(() => {
  const instance = getCurrentInstance().proxy;
  const eventChannel = instance.getOpenerEventChannel();
  // const eventChannel = this.getOpenerEventChannel();
  // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
  eventChannel.on("selectObj", (data) => {
    formData.value = { ...data };
    editFormData.value = data;
  });
});
</script>

<style scoped>
.basis-xxs {
  flex-basis: 10%;
}
</style>
