import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-demo15-login',
  templateUrl: './demo15-login.component.html',
  styleUrls: ['./demo15-login.component.css']
})
export class Demo15LoginComponent implements OnInit {

  constructor(private myRouter:Router) { }

  ngOnInit() {
  }
  jump(){
    this.myRouter.navigateByUrl('register')
  }
}
