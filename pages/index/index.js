//index.js
//获取应用实例
const app = getApp()
// var common = require('../../assets/js/common.js')
// var common = require('../../assets/js/common.js')
import common from '../../assets/js/common.js'
Page({
    data: {
        motto: 'Hello World...2424..',
        array: [1, 2, 3, 4, 5],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        zero: 0,
        array2: [{
            message: 'foo',
        }, {
            message: 'bar'
        }],
        testArr: [
            {
                id: 1,
                list: [1, 2, 3]
            },
            {
                id: 2,
                list: [4, 6]
            },
        ]
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad (res) {
        // console.log(res, 'indexjs',this.route)
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    onReady(res){
        console.log(this.helloMINA(), 'helloMINA')
    },
    helloMINA () {
        common.sayHello('MINA6')
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    tapName: function () {
        // this.motto = '999'//无效
        this.setData({'motto': 666})//有效
        console.log(123)
    },
    onPageScroll(res){
        console.log(res, 'onPageScroll')
    },
    goTest(){
        console.log(9999)
        wx.redirectTo({
            url: 'test666?id=1'
        })
    },

})
