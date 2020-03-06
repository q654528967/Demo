import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo12-list',
  templateUrl: './demo12-list.component.html',
  styleUrls: ['./demo12-list.component.css']
})
export class Demo12ListComponent implements OnInit {
  list=[100,200,300,400,500]
  constructor() { }

  ngOnInit() {
  }
  del(id){
    console.log(id);
    this.list.splice(id,1);
    console.log(this.list)
  }
}
