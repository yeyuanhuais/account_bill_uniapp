import { h, render } from "vue";
import Toast from "./toast.vue";

export class ToastCreator {
  options;

  container;

  constructor(theOptions) {
    this.options = theOptions;
    this.container = document.createElement("div");
  }

  present() {
    const myToast = h(h(Toast), this.options);
    render(myToast, this.container);
    document.body.insertBefore(this.container, document.body.firstChild);
    setTimeout(() => {
      this.dismiss();
    }, this.options.duration);
  }

  dismiss() {
    document.body.removeChild(this.container);
  }
}
// 使用
// import { ToastCreator } from "@/component/toast/toastCreator.js";

// export function showToast() {
//   const toast = new ToastCreator({
//     message: "成功",
//     duration: 1500,
//   });
//   toast.present();
// }
