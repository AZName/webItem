//index.js
const API_URL = "https://apicloud.mob.com/v1/cook/category/query?key=194b3a35d7d38";

var app = getApp()
Page({
  data:{
    data:{},


  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  var homethis = this;
  wx.request({
  url: API_URL,
  data: {},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  header: {
      'content-type': 'application/json'
  },
  success: function(res){
    // success
    console.log(res.data)
    var data = res.data;
        homethis.setData({
          data:data,
        })
  },

})
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})

