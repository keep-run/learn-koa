import React from "@/containers/throttleVsDebounce/react";

export default () => {
  // 是否立即执行的节流
  const throttle = (fn, time, immedate) => {
    let timer;
    return function (...args) {
      const _this = this;
      if (!timer) {
        if (immedate) {
          fn.apply(_this, args);
          timer = setTimeout(() => {
            timer = null;
          }, time);
        } else {
          timer = setTimeout(() => {
            timer = null;
            fn.apply(_this, args);
          }, time);
        }
      }
    };
  };

  // 是否立即执行的防抖
  const debounce = (fn, time, immediate) => {
    let timer;
    return function (...args) {
      const _this = this;
      clearTimeout(timer);   // 取消定时之后  timer依旧有值
      if (immediate) {
        if(!timer){
          fn.apply(_this, args);
        }
        timer = setTimeout(() => {
          timer = null;
        }, time);
      } else {
        setTimeout(() => {
          fn.apply(_this, args);
        }, time);
      }
    };
  };

  return <div>
    <div>节流&节流测试</div>
    <div>参考文章</div>
    <div>https://github.com/mqyqingfeng/Blog/issues/22</div>
    <div>https://github.com/mqyqingfeng/Blog/issues/26</div>
    </div>;
};
