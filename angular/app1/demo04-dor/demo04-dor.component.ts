import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04-dor',
  templateUrl: './demo04-dor.component.html',
  styleUrls: ['./demo04-dor.component.css']
})
export class Demo04DorComponent implements OnInit {
  stuList=[
    {name:'john',age:20,score:100},
    {name:'tom',age:20,score:100},
    {name:'king',age:20,score:100},
    {name:'lei',age:20,score:100}
  ]
  myScore=80
  myImgUrl='http://lorempixel.com/400/200'
  constructor() { }

  ngOnInit() {
  }
  handleClick(){
    alert('btn')
  }
}
