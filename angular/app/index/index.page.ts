import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  @ViewChild('slides1',{static:false}) slides1:ElementRef
  data:any=[]
  carouselItems:any=[]
  newArrialItems:any=[]
  recommendedItems:any=[]
  topSaleItems:any=[]
  contro:any={}
  constructor(private http:HttpClient,private el:ElementRef) {
    this.data=this.http.get('http://39.105.64.170:3001/index').subscribe(res=>{
      this.data=res;
      this.carouselItems=this.data.carouselItems
      this.newArrialItems=this.data.newArrialItems
      this.recommendedItems=this.data.recommendedItems
      this.topSaleItems=this.data.topSaleItems
    })
   }

  ngOnInit() {
  }
  onClick(){
    this.el.nativeElement.querySelector('#slides1').slidePrev()
  }
  slideOpts={
    autoplay:{
      delay:2000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    }
    
  }
  slideOp={
    aotuplay:{
      delay:2000
    },
    slidesPerView:4,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      
    },
    spaceBetween: 0,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }
  prev(){
    this.el.nativeElement.querySelector('#slides1').slidePrev()
  }
  next(){
    this.el.nativeElement.querySelector('#slides1').slideNext()
  }
}
