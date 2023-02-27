<script setup>
import { getCurrentInstance, nextTick } from "vue";
import { onLaunch, onShow } from "@dcloudio/uni-app";

onLaunch(() => {
  uni.getSystemInfo({
    success(e) {
      const {
        appContext: {
          config: { globalProperties: global },
        },
      } = getCurrentInstance(); // 3.0.11
      nextTick(() => {
        // #ifndef MP
        global.StatusBarGlobal = e.statusBarHeight;
        if (e.platform === "android") {
          global.CustomBarGlobal = e.statusBarHeight + 50;
        } else {
          global.CustomBarGlobal = e.statusBarHeight + 45;
        }
        global.CustomBarPxGlobal = `${global.CustomBarGlobal}px`;
        // #endif
        // #ifdef MP-WEIXIN
        global.StatusBarGlobal = e.statusBarHeight;
        const custom = uni.getMenuButtonBoundingClientRect();
        global.CustomGlobal = custom;
        global.CustomBarGlobal = custom.bottom + custom.top - e.statusBarHeight;
        // 高度加px 如68px
        global.CustomBarPxGlobal = `${global.CustomBarGlobal}px`;
        // #endif
        // #ifdef MP-ALIPAY
        global.StatusBarGlobal = e.statusBarHeight;
        global.CustomBarGlobal = e.statusBarHeight + e.titleBarHeight;
        global.CustomBarPxGlobal = `${global.CustomBarGlobal}px`;
        // #endif;
      });
    },
  });
});

onShow(() => {});
</script>

<style lang="less">
/*每个页面公共css */
@import "@/component/colorui/main.css";
@import "@/component/colorui/icon.css";
@import "@/component/colorui/animation.css";
@import "./uni.less";

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  background-color: #f1f5f9;
}
</style>
