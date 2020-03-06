import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10-order',
  templateUrl: './demo10-order.component.html',
  styleUrls: ['./demo10-order.component.css']
})
export class Demo10OrderComponent implements OnInit {
  myContent="hello world"
  arr=[100,200,300]
  constructor() { }

  ngOnInit() {
  }

}
