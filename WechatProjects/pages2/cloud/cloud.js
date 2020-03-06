// miniprogram/pages/cloud/cloud.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    row:[]
  },

  insert:function(){
    db.collection("webwx03").add({
      data:{
        name:"tom",
        age:13
      }
    }).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    console.log(wx);
    console.log(this);

  },
  del(){
    db.collection("webwx03").doc("b040a67a5e032b6d06f13e021e4cfc4d").remove().then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  },
  select(){
    db.collection("webwx03").get().then(res=>{this.setData({
      arr:res.data
    })}).catch(err=>{console.log(err)})
  },
  selectwhere(){
    db.collection("webwx03").where(
      {name:"tom"}
    ).get().then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  },
  del(e){
    var id=e.target.dataset.id;
    db.collection("webwx03").doc(id).remove().then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    this.select();
  },
  handleSum(){
    wx.cloud.callFunction({
      name:"sum",
      data:{
        i:10,
        j:19
      }
    }).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  },
  handleLogin(){
    wx.cloud.callFunction({
      name:"login"
    }).then(res=>{console.log(res)}).catch(err=>{
      console.log(err)
    })
  },
  handleDel(){
    wx.cloud.callFunction({
      name:"batchDelete"
    }).then(res=>{console.log(res)}).catch(err=>{
      console.log(err)
    })
  },
  upload(){
    wx.chooseImage({
      count:1,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success: function(res) {
        var list=res.tempFilePaths[0];
        wx.cloud.uploadFile({
          cloudPath:new Date().getTime() + ".png",
          filePath:list,
          success:res=>{
            console.log(res)
          }
        })
      },
    })
  },
  getImage(){
  },
  myupload(){
    wx.chooseImage({
      success: function(res) {
        var list=res.tempFilePaths[0];
        wx.cloud.uploadFile({
          cloudPath:new Date().getTime()+".png",
          filePath:list,
          success:res=>{
            var fileID=res.fileID;
            console.log(fileID)
            db.collection("myphoto").add({
              data:{
                fileID: fileID
              }
            }).then(res=>{
              console.log(res);
            }).catch(err=>{
              console.log(err)
            })
          }
        })
      },
      count:1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
    })
  },
  myImage(){
    db.collection("myphoto").get().then(res=>{
      var list = res.data;
      this.setData({ row: list })
    
    })
  },
  delectImage(e){
    var id=e.target.dataset.id;
    console.log(id);
    db.collection("myphoto").doc(id).remove().then(res=>{
      console.log(res);
      this.myImage();
    }).catch(err=>{
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})