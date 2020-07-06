// toast组件特殊的地方在于，不是通过<Toast/>方法调用的，而是函数的形式调用

import React, { Component } from 'react'
import Notification from '../Notification/index'

//始终保持一个notification   -----单例模式
let newNotification
const getNewNotification = () => {
  if (!newNotification) {
    newNotification = Notification.rewrite()
  }
  return newNotification
}


//参考文献：https://segmentfault.com/a/1190000009863702