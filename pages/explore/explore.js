// pages/explore/explore.js
const app = getApp()

Page({



  /**
   * 页面的初始数据
   */
  data: {
    fk2: false,
    fk22: true,
    fk11:true,
    fk1:false,
  },
  click1: function (e) {
    this.setData({
     fk2:true,
     fk11:false,
     fk22:false,
     fk1:true,
     
    })
  },
  click2: function (e) {
    this.setData({
      fk2: false,
      fk11: true,
      fk22: true,
      fk1: false,

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})