import React,{Component} from 'react'
import {Image,Text, ScrollView, Button, FlatList, View} from 'react-native'

export default class Detail extends Component{
  constructor(){
    super()
    this.state={title:'',subtitle:'',picList:[],price:'',timeOver:null,num:0}
  }
  componentDidMount(){
    let id=this.props.navigation.getParam('id')
    let url='http://192.168.2.101:8080/product/detail?lid='+id
    fetch(url).then(response=>response.json()).then(result=>{
      this.setState({title:result.details.title,subtitle:result.details.subtitle,picList:result.details.picList,price:result.details.price})
      this.setState({timeOver:setInterval(()=>{
          let num=this.state.num;
          if(num>=this.state.picList.length-1){
            num=0
          }else if(num<this.state.picList.length-1){
            num++
          }
          this.setState({num})
          console.log(this.state.num,this.state.picList.length)
      },2000)})
    })
  }
  componentWillUnmount(){
    clearInterval(this.state.timeOver)
  }
  handleUpdate=()=>{
    console.log(1)
  }
  render(){
    return <View style={{flex:1}}>
      <ScrollView>
       {this.state.picList.length>0 && <Image style={{width:200,height:200}} source={{uri:'http://192.168.2.101:8080/'+this.state.picList[this.state.num].md}}></Image>}
        <Text>{this.state.title}</Text>
        <Text>{this.state.subtitle}</Text>
      </ScrollView>
      <Button color='red' title="编辑此商品" onPress={this.handleUpdate}></Button>
    </View>
    
    
    
  }
}
/*
<ScrollView>
      <Image style={{width:200,height:200}} source={{uri:'http://192.168.2.101:8080/'+this.state.picList[0].md}}></Image>
  <Text>{this.state.title}</Text>
  <Text>{this.state.subtitle}</Text>
      <Button title="编辑此商品" onPress={this.handleUpdate}></Button>
    </ScrollView>

details:
category: "游戏本"
cpu: "Intel i7标准电压版"
details: "<div class="content_tpl"><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003d3fNd4e6c74e.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003d49Nd9aa8623.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003d53N79717f17.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003db4N5441df2e.jpg"></div></div><div class="formwork"><div class="formwork_img"><img class="" src="img/product/detail/59003afdN7d9208b8.jpg"></div></div></div>"
disk: "128G+1T"
family_id: 7
is_onsale: 1
lid: 22
lname: "戴尔灵越游匣15PR-5745B"
memory: "8G"
os: "Windows 10"
picList: (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
  picList: Array(7)
  0:
  laptop_id: 22
  lg: "img/product/lg/5913f8ffN49fa143c.jpg"
  md: "img/product/md/5913f8ffN49fa143c.jpg"
  pid: 132
  sm: "img/product/sm/5913f8ffN49fa143c.jpg"
price: 6999
promise: " *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货"
resolution: "全高清屏(1920×1080)"
shelf_time: 148123456789
sold_count: 1901
spec: "宗师版 i7-7700HQ 8G GTX1050 4G"
subtitle: "【白条6期免息 游匣“10”力出击】七代四核CPU ,GTX1050 4G独显,FHD全高清屏,热血出击！"
title: "戴尔DELL灵越游匣15PR-5745B 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 128GSSD+1T GTX1050 4G独显 FHD)黑"
video_card: "GTX960M"
video_memory: "4G" */