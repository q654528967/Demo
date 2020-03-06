import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-demo13-http',
  templateUrl: './demo13-http.component.html',
  styleUrls: ['./demo13-http.component.css']
})
export class Demo13HttpComponent implements OnInit {

  constructor( private myHttp:HttpClient) { }

  ngOnInit() {
  }
  handleClick(){
    let url='http://jsonplaceholder.typicode.com/users';
    this.myHttp.get(url).subscribe(res=>{
      console.log(res)
    })
  }
}
