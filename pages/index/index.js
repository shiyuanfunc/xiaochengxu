//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tempFilePaths: ''
  },
  onLoad: function () {
  },
  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
       
      }
    })

  },

  chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        var tempFilePath = res.tempFilePaths[0]
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function (res) {
            var savedFilePath = res.savedFilePath
          }
        })
        that.setData({
          tempFilePaths: res.tempFilePaths[0],
        })
      }
    })
  },
  
  upimage:function(){
    
    // const uploadTask = wx.uploadFile({
    //   url: 'http://127.0.0.1:8081', //仅为示例，非真实的接口地址
    //   filePath: this.data.tempFilePaths,
    //   name: 'file',
    //   formData: {
    //     'user': 'test'
    //   },
    //   success: function (res) {
    //     var data = res.data;
    //     wx.navigateTo({
    //       url:'pages/detail/detail?data='+data,
    //       success: function (res) {
    //         console.log(res)
    //       },
    //       fail: function (err) {
    //         console.log(err)
    //       }

    //     })

        
    //     //do something
    //     // console.log(data)
    //   }
    // })
    wx.navigateTo({
          url:'/pages/detail/detail',
          success: function (res) {
            console.log(res)
          },
          fail: function (err) {
            console.log(err)
          }

        })

    
  }


}) 