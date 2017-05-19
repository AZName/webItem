// pages/menuDetail/menuDetail.js
const API_URL = 'https://apicloud.mob.com/v1/cook/menu/query?';
const API_KEY = '194b3a35d7d38';
Page({
  data:{
    content:null,
    ingredients:null,
    method:null
  },
  onLoad:function(options){
    var that = this;
    console.log(options);
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: API_URL,
      data: {
        key:API_KEY,
        id: options.id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res.data);
        var str  = res.data.result.recipe.ingredients;

        that.setData({
          content:res.data.result.recipe,
          ingredients:JSON.parse(res.data.result.recipe.ingredients),
          method:JSON.parse(res.data.result.recipe.method)
        })
        
        wx.setNavigationBarTitle({
          title: res.data.result.name,
          success: function(res) {
            // success
          }
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })

  },
  onReady:function(){
    // 页面渲染完成


  },
 
})