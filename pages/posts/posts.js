var postsData = require("../../data/posts_database.js");
//接受导出的数据，模拟与后台数据库之间的数据交互
Page({
  data: {},
  onLoad: function (options) {
    // 生命周期函数--监听页面加载 
    this.setData({
      post_key: postsData.postList
    });
    //将接受到的数据给到页面的数据库中
  },
  OnPost: function (event) {
    var postId = event.currentTarget.dataset.postid;
    //console.log(postId)
    //console.log(event)
    wx.navigateTo({
     url:"/pages/posts/post-detail/post-detail?id="+postId
    })
  }

})