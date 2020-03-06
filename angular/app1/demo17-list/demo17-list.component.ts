import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo17-list',
  templateUrl: './demo17-list.component.html',
  styleUrls: ['./demo17-list.component.css']
})
export class Demo17ListComponent implements OnInit {
  list:any;
  constructor(private myHttp:HttpClient,private myRouter:Router) { }

  ngOnInit() {
    this.myHttp.get('http://localhost:8080/product/list').subscribe(res=>{
    this.list=res.data;
    console.log(this.list)
    })
  }
  jump(lid){
    let url='pchck/'+lid
    this.myRouter.navigateByUrl(url)
  }
}
