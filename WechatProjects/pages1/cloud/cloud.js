// pages/cloud/cloud.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  insert(){
   /* db.collection("webUser").add({
      data:{
        name:"dondong",
        age:23
      },
      success:(res)=>{
        console.log(res)
      },
      fail:(err)=>{
        console.log(err);
      }
    })*/
    db.collection("webUser").add({
      data:{
        name:"dasha",
        age:3
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  update(){
    db.collection("webUser").doc("dbff9fc75e01ceda06843c195a61549b").update({
      data:{
        age:18
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  del(){

  },
  select(){

  },
  insert1(){
    db.collection("webStu").add({
      data:{
        name:"tom",
        age:12,
        clazz:"web"
      }
    }).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
  },
  update1(){
    db.collection("webStu").doc('e8f863ba5e01dd3e068997964dd65963').update({
      data:{
        age:13
      }
    }).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})