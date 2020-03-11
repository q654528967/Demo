import React from 'react';

export default class AddName extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  test1Click=()=>{
    let value=this.refs.test1.value;
    this.props.addNameCreater(value)
  }
  test3click=()=>{
    let value=this.refs.test3.value;
    this.props.addNameAsync(value);
  }
  render(){
    let {title,subtitle,test1}=this.props;
    return (
      <div>
  <p>{title}</p>
  <input type="text" ref="test1"></input>
  <button onClick={this.test1Click}>提交</button>
    <p>{subtitle}</p>
    <input type="text" ref="test2"></input>
  <button>提交</button>
    <p>{test1}</p>
    <input type="text" ref="test3"></input>
    <button onClick={this.test3click}>异步</button>
      </div>
    )
  }
}