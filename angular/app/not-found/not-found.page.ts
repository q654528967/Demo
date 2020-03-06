import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service'
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
  test:string=''
  constructor(private http:MyHttpService) {
   }

  ngOnInit() {
  }

}
