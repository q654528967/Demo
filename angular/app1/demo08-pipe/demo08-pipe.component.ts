import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo08-pipe',
  templateUrl: './demo08-pipe.component.html',
  styleUrls: ['./demo08-pipe.component.css']
})
export class Demo08PipeComponent implements OnInit {
  myStu={name:'lucy',age:2}
  constructor() { }

  ngOnInit() {
  }

}
