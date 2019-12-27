// pages/author-personal/author-personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    close: true,
    follow1:false,
    follow2:true,
    Modalbg: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  follow1(){
    this.setData({
    follow1: true,
    follow2: false,

    }),
      wx.showToast({
        title: '已关注',
        icon: 'success',
        duration: 1000
      })
  },

  follow2() {
    this.setData({
    follow1: true,
    follow2: true
    }),
    wx.showToast({
      title: '取消关注',
      icon: 'success',
      duration: 1000
    })
  },

  open() {
    this.setData({
      close: false,
      Modalbg: true
    })
  },
  close() {
    this.setData({
      close: true,
      Modalbg: false
    })

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