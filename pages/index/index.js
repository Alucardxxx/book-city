//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  allauthors(){
    wx.navigateTo({
      url: "/pages/all-authors/all-authors"
    })
  },
  search(){
    wx.navigateTo({
      url: "/pages/search-page/search-page"
    })
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
  categories() {
    wx.navigateTo({
      url: "/pages/all-categories/all-categories"
    })
  },
  //事件处理函数
 
})
