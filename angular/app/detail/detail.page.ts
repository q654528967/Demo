import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPage implements OnInit {
  picList:any=null
  details:any={}
  detail:any=''
  lid:any
  price=0
  code:any
   constructor(private toast:ToastController,private router:ActivatedRoute,private http:HttpClient,private ref: ChangeDetectorRef,private nav:NavController) {
  }
  ionViewWillEnter(){
    let id=this.router.snapshot.paramMap.get('id');
    this.lid=id;
    let url='http://39.105.64.170:3001/product/detail?lid='+id;
    this.http.get(url).subscribe((res:any):void=>{
      console.log(res)
      this.picList=res.details.picList;
      this.details=res.details
      this.price=res.details.price;
      this.detail=res.details.details
      this.ref.markForCheck(); 
      this.ref.detectChanges();
    }) 
  }
  ngOnInit() {
  }
  getServe(){
    
  }
  onClick(){
  }
  slideOpts={
    autoplay:{
      delay:2000,
      disableOnInteraction: false,
    },
    loop:true,
    pagination :{
      el: '.swiper-pagination',
      clickable :true,
    }
  }
  goCart(){
    this.nav.navigateForward(['/cart'])
  }
  go404(){
    this.nav.navigateForward('/not-found')
  }
  addCart(){
    let url=`http://39.105.64.170:3001/cart/add?lid=${this.lid}&buyCount=1`
    this.http.get(url,{withCredentials:true}).subscribe((res:any):void=>{
      console.log(res)
      if(res.code==200){
        let str1='添加购物车成功'
       this.presentToast(str1)
      }else if(res.code==300){
        let str2='未登录'
        this.presentToast(str2)
        this.nav.navigateForward('/login')
      }else{
        let str3='皮一下，很开心'
        this.presentToast(str3)
      }
    })
    
  }
  async presentToast(s:string){
    const toast = await this.toast.create({
      message: s,
      duration: 2000
    });
    toast.present();
  }
}
