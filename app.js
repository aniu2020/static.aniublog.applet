//app.js
App({
  onLaunch: function (res) {//当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
      // Launch/lɔːntʃ/（落去）发射；发行，投放市场；
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
      // console.log('onLaunch-logs',logs)
    logs.unshift(Date.now())
      //unshift /ʌn'ʃɪft/ （安徐福次）
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
          // console.log('login-res',res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // console.log('onLaunch-res',res)
  },
  globalData: {
    userInfo: null
  }
})