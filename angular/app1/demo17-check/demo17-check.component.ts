import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo17-check',
  templateUrl: './demo17-check.component.html',
  styleUrls: ['./demo17-check.component.css']
})
export class Demo17CheckComponent implements OnInit {
  lid=0
  constructor(private myRouter:ActivatedRoute) { }

  ngOnInit() {
    this.myRouter.params.subscribe(res=>{
      console.log(res);
      this.lid=res.lid
    })
  }

}
