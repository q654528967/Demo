import React,{Component} from 'react'
import {View,Image,TextInput,Button} from 'react-native'


export default class Login extends Component{
  constructor(){
    super()
    this.state = {
      uname:"",//存储输入框的用户名
      upwd:""//存储输入框密码
    }
  }

  handlePress=()=>{
    var config={
      method:"POST",
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      },
      body:'uname='+this.state.uname+'&upwd='+this.state.upwd
     }
    var url="http://192.168.2.101:8080/user/login"
    fetch(url,config).then(res=>res.json()).then(res=>{
      if(res.code==200){
        this.props.navigation.push('main')
      }else{
        alert('用户名或密码错误')
        this.setState({uname:'',upwd:''})
      }
    })
      
  }
  //保存用户名
  saveName=(msg)=>{
    this.setState({uname:msg})
  }
  //保存密码
  savePwd=(msg)=>{
    this.setState({upwd:msg})
  }

  render(){
    return <View>
      <Image 
       style={{width:100,height:100,borderRadius:50,alignSelf:'center'}}
       source={{uri:'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg'}}></Image>
      <TextInput 
       value={this.state.uname}
       onChangeText={this.saveName}
       placeholder='用户名'></TextInput>
      <TextInput 
       value={this.state.upwd}
       onChangeText={this.savePwd}
       placeholder='密码' secureTextEntry={true}></TextInput>
      <Button title='登录' onPress={this.handlePress}></Button>
    </View>
  }
}




