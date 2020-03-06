import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06-modle',
  templateUrl: './demo06-modle.component.html',
  styleUrls: ['./demo06-modle.component.css']
})
export class Demo06ModleComponent implements OnInit {
  uname='home'
  lists=[]
  constructor() { }

  ngOnInit() {
  }
  handleChange(){
    
  }
  addList(){
    this.lists.push(this.uname);
    console.log(this.lists)
  }
}
