import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo11-header',
  templateUrl: './demo11-header.component.html',
  styleUrls: ['./demo11-header.component.css']
})
export class Demo11HeaderComponent implements OnInit {
  @Output() parentInput=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  handleClick(){
    this.parentInput.emit('abc')
  }
}
