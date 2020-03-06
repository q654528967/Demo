import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo12-item',
  templateUrl: './demo12-item.component.html',
  styleUrls: ['./demo12-item.component.css']
})
export class Demo12ItemComponent implements OnInit {
  @Input() output
  @Output() input=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  del(){
    this.input.emit(this.output)
  }
}
