import React,{Component} from 'react'
import {View,Text, FlatList,Image,TouchableOpacity,ScrollView} from 'react-native'
export default class ProductList extends Component{
  nowPage=1
  constructor(){
    super()
    this.state={data:[],pageCount:''}
  }
  componentDidMount(){
    let url='http://192.168.2.101:8080/product/list'
    fetch(url).then(response=>response.json()).then(result=>{
      for(let i=0;i<result.data.length;i++){
        result.data[i].key=i
      }
      this.setState({data:result.data,pageCount:result.pageCount})
    })
  
  }
  handlePress=(count,lid)=>{
    alert('该商品共卖了'+count+'个')
    this.props.navigation.push('detail',{id:lid})
  }
  showList=(info)=>{
    return <View>
    <TouchableOpacity onPress={()=>this.handlePress(info.item.sold_count,info.item.lid)} style={{flexDirection:"row",alignItems:'center',margin:10}}>
      <Image style={{width:80,height:80,borderRadius:40}} source={{uri:'http://192.168.2.101:8080/'+info.item.pic}}></Image>
      <Text >{info.item.title}</Text>
    </TouchableOpacity>
    </View>
  }
  loadMore=()=>{
    console.log(this.nowPage,this.state.pageCount)
    if(this.nowPage<this.state.pageCount-1){
      this.nowPage++
      let url='http://192.168.2.101:8080/product/list?pno='+this.nowPage
      fetch(url).then(response=>response.json()).then(result=>{
        console.log(result)
        let arr=this.state.data
        let newArr=arr.concat(result.data)
        for(let i=0;i<newArr.length;i++){
          newArr[i].key=i
        }
        this.setState({data:newArr})
      })
    }
    
  }
  render(){
    return <FlatList onEndReached={this.loadMore} data={this.state.data} renderItem={this.showList} extraData></FlatList>
    
  }
}