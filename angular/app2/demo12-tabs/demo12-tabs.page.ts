import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo12-tabs',
  templateUrl: './demo12-tabs.page.html',
  styleUrls: ['./demo12-tabs.page.scss'],
})
export class Demo12TabsPage implements OnInit {

  constructor(private route:ActivatedRoute) { 
    const params = this.route.snapshot.params;
      console.log(params.id);
  }

  ngOnInit() {
  }

}
