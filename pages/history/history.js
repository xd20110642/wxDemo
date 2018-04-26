// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs:[]
  },

  /**
   * 生命周期函数--监听页面加载 页面初始化 options为页面跳转所带来的参数
   */
  onLoad: function (options) {
    let log = wx.getStorageSync('calclogs');
    this.setData({ "logs": log })
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
    let log = wx.getStorageSync('calclogs');
    this.setData({"logs":log})
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
