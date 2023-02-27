<template>
  <cuCustom bg-color="bg-gradual-blue" :is-back="true">
    <template #content>{{ formData?.id ? "编辑" : "添加" }}周期帐</template>
  </cuCustom>
  <form>
    <view class="cu-form-group margin-top">
      <checkboxComponent
        ref="checkboxRef"
        type="radio"
        :options="typeOptions"
        :column="3"
        :value="formData.type"
        radius
        class="checkbox"
        @change="onValueChange($event, 'type')"
      />
    </view>
    <view class="cu-form-group">
      <input
        v-model="formData.money"
        placeholder="金额"
        class="text50"
        :class="formData.type == 1 ? 'text-red' : 'text-cyan'"
      />
    </view>
    <view class="cu-form-group">
      <view class="title text-gray">开始日期</view>
      <uni-datetime-picker
        v-model="formData.startDate"
        type="date"
        :clear-icon="false"
        :border="false"
        placeholder="开始日期"
      />
    </view>
    <view class="cu-form-group">
      <view class="title text-gray">重复周期</view>
      <input placeholder="开始日期" />
    </view>
    <view class="cu-form-group">
      <view class="title text-gray">重复次数</view>
      <input placeholder="开始日期" />
    </view>
    <view class="cu-form-group">
      <view class="title text-gray">分类</view>
      <input placeholder="开始日期" />
    </view>
    <view class="cu-form-group">
      <view class="title text-gray">账户</view>
      <input placeholder="开始日期" />
    </view>
    <view class="cu-form-group">
      <view class="title text-gray">备注</view>
      <input placeholder="开始日期" />
    </view>
  </form>
  <view class="cu-bar btn-group">
    <button class="cu-btn bg-green shadow-blur round" @click="onReset">重置</button>
    <button class="cu-btn bg-blue shadow-blur round" @click="onSumbit">保存</button>
  </view>
</template>

<script setup>
import cuCustom from "@/component/cuCustom.vue";
import request from "@/utils/request";
import { getCurrentInstance, ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import checkboxComponent from "@/component/checkbox/index.vue";

const typeOptions = [
  { label: "收入", value: 0 },
  { label: "支出", value: 1 },
  { label: "转账", value: 2 },
];
const editFormData = ref({ type: 0 });
const formData = ref({ type: 0 });
const onValueChange = (e, name) => {
  console.log("%c e, name", "font-size:13px; background:pink; color:#bf2c9f;", e, name);
  if (name === "type") {
    formData.value = { ...formData.value, [name]: e.value };
    return;
  }
  formData.value = { ...formData.value, [name]: e.target.value };
};
const maskClick = (e) => {
  console.log("%c e", "font-size:13px; background:pink; color:#bf2c9f;", e);
};
const onReset = () => {
  formData.value = { ...editFormData.value };
};
const onSumbit = () => {
  const url = formData.value.id ? "/api/cycleBill/update" : "/api/cycleBill/create";
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
  if (eventChannel) {
    eventChannel.on("selectObj", (data) => {
      formData.value = { ...data, type: 0 };
      editFormData.value = data;
    });
  }
});
</script>

<style scoped lang="less">
.basis-xxs {
  flex-basis: 10%;
}
.cu-form-group {
  flex-direction: column;
  align-items: flex-start;
  .title {
    font-size: 25upx;
  }
}
.cu-form-group picker::after {
  content: "";
}
.cu-form-group picker .picker {
  line-height: 50upx;
  font-size: 30rpx;
}
.text50 {
  font-size: 50rpx;
}
.text-red {
  color: #e54d42;
}
.text-cyan {
  color: #1cbbb4;
}
.checkbox {
  width: 100%;
  height: 100%;
}
</style>
