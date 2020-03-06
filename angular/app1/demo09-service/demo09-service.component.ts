import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'app-demo09-service',
  templateUrl: './demo09-service.component.html',
  styleUrls: ['./demo09-service.component.css']
})
export class Demo09ServiceComponent implements OnInit {

  constructor(private myService:LoggerService) { }

  ngOnInit() {
  }
  handleClick(){
    console.log(this.myService);
    this.myService.show('btn');
  }
}
