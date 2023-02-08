<template>
  <view class="login">
    <view class="margin-xs">
      <view class="bg-white radius-lg" style="min-height: 90vh">
        <view class="padding-tb padding-lr text-center">
          <text class="text-xxl text-black">手机号快捷登录</text>
        </view>

        <view class="margin-lr padding">
          <view class="padding-tb-sm">
            <input placeholder="请输入手机号" />
          </view>
          <view class="flex justify-between padding-tb-sm">
            <input placeholder="请输入验证码" />
            <view class="text-gray">获取验证码</view>
          </view>
        </view>

        <view class="padding-tb-xxl padding-top padding-lr-xs">
          <view class="flex flex-column margin-sm">
            <button class="cu-btn xxl bg-gradual-pinknew round">登录</button>
          </view>
          <view class="padding-top text-center text-blue text-lg padding-bottom-xxl">
            账号密码登录 | 登录遇到问题
          </view>
        </view>

        <view class="padding-tb-xxl padding-top padding-lr-xs" style="margin-top: 20vh">
          <view class="padding-top text-center text-gray text-df"> ——— 社交账号直接登录 ——— </view>
          <view class="padding text-center">
            <view class="cu-avatar round margin-right bg-green"><text class="icon-wechat text-lg"></text></view>
            <view class="cu-avatar round margin-right bg-cyan"><text class="icon-tencent-qq text-lg"></text></view>
            <view class="cu-avatar round margin-right bg-red"><text class="icon-sina-weibo text-lg"></text></view>
            <view class="cu-avatar round margin-right bg-black"><text class="icon-apple text-lg"></text></view>
          </view>
          <view class="padding-lr-xl text-center text-gray padding-top-sm">
            未注册的手机号登录时将自动注册，且代表您已经同意 <text class="solids-bottom">用户协议</text> 和
            <text class="solid-bottom">隐私政策</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style scoped lang="less"></style>
