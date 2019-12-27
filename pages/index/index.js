//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  personal(){
    wx.navigateTo({
      url: "/pages/author-personal/author-personal"
    })
  },
    going() {
    wx.navigateTo({
      url: "/pages/science-fiction/science-fiction"
    })
  },
  details() {
    wx.navigateTo({
      url: "/pages/trisomy/trisomy"
    })
  },
  //事件处理函数
 
})
