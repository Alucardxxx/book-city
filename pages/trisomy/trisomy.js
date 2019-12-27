// pages/trisomy/trisomy.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collection1:false,
    collection2:true,
    showModal: false,
    Modalbg: false,
    close: true
  },
  open(){
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

  submit: function () {
    this.setData({
      showModal: true,
      Modalbg: true
    })
  },
  
  go: function () {
    this.setData({
      showModal: false,
      Modalbg: false
    })

  },
  collectiony(){
    this.setData({
      
      collection1: true,
      collection2: false,
     
    })
    
    wx.showToast({
      title: '已收藏',
      icon: 'success',
      duration: 1000
    })

  },
  collectionn() {
    this.setData({
      collection1: false,
      collection2: true,
    })

    wx.showToast({
      title: '取消收藏',
      icon: 'success',
      duration: 1000
    })
  },
  comment(){
    wx.navigateTo({
      url: "/pages/comment-page/comment-page"
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