// pages/weather/weather.js
const API_URL = 'https://apicloud.mob.com/v1/weather/query?';
const API_KEY = '194b3a35d7d38';
const MAP_URL = 'https://apis.map.qq.com/ws/geocoder/v1/?';
const MAP_KEY = '7GRBZ-ILJW4-N22UW-DB4LU-IKGZ2-VFFPM';

var city = null;
Page({
  data:{
    city:null,
    weather:null

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this;

    wx.getLocation({
      type: 'wgs84', 
      success: function(res){
        var locations = res.latitude+','+res.longitude;
      wx.request({
        url: MAP_URL,
        data: {
          key:MAP_KEY,
          location:locations
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          city = res.data.result.address_component.city.replace('市','');
          //赋值
          that.setData({
          city:city
        })
          //获取天气预报
          wx.request({
            url: API_URL,
            data: {
              key:API_KEY,
              city:city,
            },
            method: 'GET', 
            success: function(res){
              that.setData({
                weather:res.data.result[0]
              })
              console.log(that.data.weather);
            }
          })
        }
      })
      }
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