import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.page.html',
  styleUrls: ['./demo04.page.scss'],
})
export class Demo04Page implements OnInit {
  lists=[1,2,3,4,5]
  constructor() { }

  ngOnInit() {
  }
  del(even){
    console.log(even)
    this.lists.splice(even,1)
  }
}
