// pages/menu/menu.js
const API_URL = "https://apicloud.mob.com/v1/cook/menu/search?";
const API_KEY = "194b3a35d7d38";

var page = 1;
var cid = null;
var that = null;

Page({
  data:{
    dataArray:[],
    isHidden:false,
  },
  onLoad:function(options){
    that = this;
    
    cid = options.ctgid;
     wx.setNavigationBarTitle({
          title: options.name,
          success: function(res) {
          }
        })
        //请求数据
    wx.request({
      url: API_URL,
      data: {
        key:API_KEY,
        page:page,
        size:'20',
        cid:cid
      },
      method: 'GET', 
      success: function(res){
        // success
        // console.log(res.data);
        var data = res.data.result.list;
        console.log(data);
        
        that.setData({
          dataArray:that.data.dataArray.concat(data)
        })
      }
    })
  },

  //加载更多
  loadMore: function(){

    //弹框
    wx.showLoading({
      title: '加载中...',
    })
    //请求数据
    page++;
      wx.request({
      url: API_URL,
      data: {
        key:API_KEY,
        page:page,
        size:'20',
        cid:cid
      },
      method: 'GET', 
      success: function(res){
        // success
        // console.log(res.data);
        var data = res.data.result.list;
        // console.log(data);
        
        that.setData({
          dataArray:that.data.dataArray.concat(data)
        })
        console.log('刷新了')
          wx.hideLoading();

      }
    })
   
  }

})


