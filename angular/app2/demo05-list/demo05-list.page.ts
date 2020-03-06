import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05-list',
  templateUrl: './demo05-list.page.html',
  styleUrls: ['./demo05-list.page.scss'],
})
export class Demo05ListPage implements OnInit {
  myList=[]
  constructor() { }

  ngOnInit() {
    console.log('05')
    for(let i=0;i<=10;i++){
      this.myList.push('商品'+i)
    }
  }
  doRefresh(myRefresher){
    setTimeout(()=>{
      for(let i=0;i<=5;i++){
        this.myList.unshift('新商品'+i)
      }
      myRefresher.target.complete()
    },2000)
  }
  loadData(even){
    setTimeout(()=>{
      for(let i=0;i<=5;i++){
        this.myList.push('刷新商品'+i)
      }
      even.target.complete()
    },2000)
  }
}
