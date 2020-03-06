import React,{Component} from 'react'
import {View,Text,Image,StyleSheet, TouchableOpacity} from 'react-native'
export default class Main extends Component{
  componentDidMount(){
    
  }
  handleProduct=()=>{
    this.props.navigation.push('productlist')
  }
  render(){
    return <View style={{backgroundColor:'powderblue'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:100,borderColor:'white',borderBottomWidth:2,borderRightWidth:2,flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,color:'red'}}>200</Text>
          <Text>当日pc端pv量</Text>
        </View>
        <View style={{height:100,borderColor:'white',borderBottomWidth:2,borderLfteWidth:2,flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,color:'blue'}}>230</Text>
          <Text>移动端pv量</Text>
        </View>
      </View>
      <View style={myStyle.myContainer}>
        <View style={myStyle.myItemL}>
          <Text style={{fontSize:20,color:'red'}}>1020</Text>
          <Text>已完成订单总数</Text>
        </View>
        <View style={myStyle.myItemR}>
          <Text style={{fontSize:20,color:'blue'}}>2390</Text>
          <Text>当日app下载量</Text>
        </View>
      </View>
      <View style={myStyle.myContainer}>
        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:80,height:80}} source={require('../img/order.png')}></Image>
          <Text>订单管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image style={myStyle.myImage} source={require('../img/user.png')}></Image>
          <Text>用户管理</Text>
        </TouchableOpacity>
      </View>
      <View style={myStyle.myContainer}>
        <TouchableOpacity onPress={this.handleProduct} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image style={myStyle.myImage} source={require('../img/product.png')}></Image>
          <Text>商品管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image style={myStyle.myImage} source={require('../img/setting.png')}></Image>
          <Text>设置</Text>
        </TouchableOpacity>
      </View>
    </View>
  }
}
var myStyle=StyleSheet.create({
  myContainer:{flexDirection:'row',justifyContent:'space-between'},
  myItemL:{borderColor:'white',borderBottomWidth:2,borderRightWidth:2,flex:1,justifyContent:'center',alignItems:'center',height:100},
  myItemR:{borderColor:'white',borderBottomWidth:2,borderLeftWidth:2,flex:1,justifyContent:'center',alignItems:'center',height:100},
  myImage:{width:80,height:80}
})