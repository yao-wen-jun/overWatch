var postsData = require('../../../data/posts_database.js')
Page({
    data: {
        
    },
    onLoad: function (option) {
        var postId = option.id
        this.data.postId = postId;
        //console.log(postId)
        var postData = postsData.postList[postId];
        this.setData({
            post_key: postData
        })
        // wx.setStorageSync('logs',[1])
        var postsCollected = wx.getStorageSync('postsCollected')
        if (postscollected) {
            var postcollected = postsCollected[postId];
            this.data.post_key.collected = postcollected;
            var param = this.data.post_key.collected
            this.setData = ({
                param
            })
        }
        else {
            var postscollected = {};
            postscollected[postId] = false;
            wx.setStorageSync('postsCollected', postscollected);
        }
    },
    onCollectionTap: function (event) {
        var postscollected = wx.getStorageSync('postsCollected')
        var postcollected = postscollected[this.data.postId];
        postcollected = !postcollected;
        postscollected[this.data.postId] = postcollected;
        //更新了文章是否收藏的缓存值
        wx.setStorageSync('postsCollected', postscollected);
        var a = [];
        console.dir(this)
        console.log(postcollected)
        this.data.post_key.collected = postcollected;
        var param = this.data.post_key.collected
        this.setData({
            param:this.data.post_key.collected
        })
        console.log(this.data.post_key.collected)
        wx.showToast({
            title:postcollected?"收藏成功":"取消成功"
        })
    },
    onShareTap:function(event){
        wx.showActionSheet({
            itemList:['分享给好友','分享到朋友圈','分享到到QQ','分享到微博'],
            itemColor:"#405f80"
        })
        console.log(this.data)
    }
   
})
