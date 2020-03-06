import { Component, OnInit,Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  id:any
  code:any
  data:any=[]
  allSelect=false
  constructor(private router:ActivatedRoute,private http:HttpClient,private toast:ToastController) { 
    
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    let url="http://39.105.64.170:3001/cart/list"
    this.http.get(url,{withCredentials:true}).subscribe((res:any):void=>{
      if(res.code==300){
        this.presentToast()
      }else if(res.code==200){
        console.log(res)
        this.data=res.data
        for(var i=0;i<this.data.length;i++){
          this.data[i].isSelected=false
        }
      }
    })
    
  }
  onClick(){
    console.log(this.data)
  }
  async presentToast(){
    let toast=await this.toast.create({
      message:'请登录',
      duration:2000
    })
    toast.present()
  }
  allSel(){
    console.log(this.allSelect)
    for(var i=0;i<this.data.length;i++){
      this.data[i].isSelected=this.allSelect
    }
  }
  oChange(){
    let statu=true
    for(let i=0;i<this.data.length;i++){
      statu=this.data[i].isSelected && statu
    }
    this.allSelect=statu
  }
  calcAll(){
    let sum=0;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].isSelected){
        sum+=this.data[i].count * this.data[i].price
      }
    }
    return sum
  }
}
