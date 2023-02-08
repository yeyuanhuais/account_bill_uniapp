<template>
  <view class="">
    <!-- 顶部个人信息 -->
    <view class="bg-white">
      <view class="flex padding">
        <view class="padding-lr-xs">
          <view
            class="cu-avatar lg round"
            style="
              background-image: url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1);
            "
          >
          </view>
        </view>
        <view class="text-xl text-black padding-xs">
          <view>Hello，啄木鸟</view>
          <view class="cu-tag round line-green sm">已减排22.2g ></view>
        </view>
      </view>
    </view>
    <!-- 基本数据 -->
    <view class="grid cu-list col-4 no-border padding-lr-xs radius-lg-bottom">
      <view class="cu-item">
        <view class="text-black text-bold text-xxl"> 6 </view>
        <text>优惠券</text>
      </view>
      <view class="cu-item">
        <view class="text-black text-bold text-xxl"> 0 </view>
        <text>权益卡</text>
      </view>
      <view class="cu-item">
        <view class="text-black text-bold text-xxl"> 4 </view>
        <text>保修卡</text>
      </view>
      <view class="cu-item">
        <view class="text-black text-bold text-xxl"> 11 </view>
        <text>收据</text>
      </view>
    </view>
    <!-- 助力/推荐/邀请 -->
    <view class="margin-top-sm padding-lr-xs">
      <view class="bg-brown light radius-lg shadow-blur">
        <view class="flex justify-between padding-tb-sm padding-lr-sm">
          <view class="padding-xs">
            <view>9.9元开通超级会员最高可省￥40</view>
          </view>
          <view class="">
            <view class="bg-black cu-btn round">开通会员</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 常用功能 -->
    <view class="grid bg-white cu-bar margin-lr-xs margin-top-sm col-4 no-border radius-lg-top">
      <view class="action">
        <text class="text-xl text-black">我的订单</text>
      </view>
      <view class="action">
        <text class="text-lg">全部订单<text class="cuIcon-right"></text></text>
      </view>
    </view>
    <view class="grid text-black cu-list col-4 no-border margin-lr-xs padding-bottom radius-lg-bottom">
      <view class="cu-item" wx:for="{{iconList}}" wx:key="idx" bindtap="{{item.bindtap}}">
        <view class="cuIcon-{{item.icon}} text-{{item.color}} text-shadow" style="font-size: 56rpx">
          <view class="cu-tag badge" wx:if="{{item.badge!=0}}">
            <block wx:if="{{item.badge!=1}}">{{ item.badge > 99 ? "99+" : item.badge }}</block>
          </view>
        </view>
        <text>{{ item.name }}</text>
      </view>
    </view>

    <view class="margin-top-sm padding-lr-xs">
      <view class="bg-white light radius-lg shadow-blur">
        <view class="flex justify-between padding-tb-sm padding-lr-sm">
          <view class="padding-xs">
            <view class="text-xl text-black">惊喜连连·洁净一秋</view>
            <view class="padding-top-xs"
              >家居清洗限时<text class="text-red text-bold"> 6.6折 </text
              ><text class="cuIcon-roundrightfill text-red"></text
            ></view>
          </view>
          <view class="">
            <view class="cu-btn round bg-gradual-pinknew margin-top-sm">6折优惠</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 其他功能 -->
    <view class="grid bg-white cu-bar margin-lr-xs margin-top col-4 no-border radius-lg-top">
      <view class="action">
        <text class="text-xl">其他功能</text>
      </view>
    </view>
    <view class="grid text-black cu-list col-4 no-border margin-lr-sm padding-bottom radius-lg-bottom">
      <view class="cu-item" wx:for="{{iconOtherList}}" wx:key="idx" bindtap="{{item.bindtap}}">
        <view class="cuIcon-{{item.icon}} text-{{item.color}} text-shadow" style="font-size: 56rpx">
          <view class="cu-tag badge" wx:if="{{item.badge!=0}}">
            <block wx:if="{{item.badge!=1}}">{{ item.badge > 99 ? "99+" : item.badge }}</block>
          </view>
        </view>
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "More",
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

<style scoped></style>
