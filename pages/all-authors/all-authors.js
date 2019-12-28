// pages/all-authors/all-authors.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hid1:false,
    hid2:true,
    hid3: false,
    hid4: true,
    hid5: false,
    hid6: true,
    hid7: false,
    hid8: true,
    hid9: false,
    hid10: true,
  },

  tp1(){
    this.setData({
      hid1: true,
      hid2: false
      
    }),
      wx.showToast({
        title: '已关注',
        icon: 'success',
        duration: 1000
      })
     
  },
  tp2() {
    this.setData({
      hid1: false,
      hid2: true
    }),
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 1000
      })
  },
  tp3() {
    this.setData({
      hid3: true,
      hid4: false

    }),
      wx.showToast({
        title: '已关注',
        icon: 'success',
        duration: 1000
      })

  },
  tp4() {
    this.setData({
      hid3: false,
      hid4: true
    }),
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 1000
      })
  },
  tp5() {
    this.setData({
      hid5: true,
      hid6: false

    }),
      wx.showToast({
        title: '已关注',
        icon: 'success',
        duration: 1000
      })

  },
  tp6() {
    this.setData({
      hid5: false,
      hid6: true
    }),
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 1000
      })
  },
  tp7() {
    this.setData({
      hid7: true,
      hid8: false

    }),
      wx.showToast({
        title: '已关注',
        icon: 'success',
        duration: 1000
      })

  },
  tp8() {
    this.setData({
      hid7: false,
      hid8: true
    }),
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 1000
      })
  },
  tp9() {
    this.setData({
      hid9: true,
      hid10: false

    }),
      wx.showToast({
        title: '已关注',
        icon: 'success',
        duration: 1000
      })

  },
  tp10() {
    this.setData({
      hid9: false,
      hid10: true
    }),
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 1000
      })
  },
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