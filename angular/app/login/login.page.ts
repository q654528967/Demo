import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  uname:'dingding'
  upwd:'123456'
  lname:string=''
  isLogin:boolean=false
  constructor(private http:HttpClient,private nav:NavController,private toast:ToastController) { }

  ngOnInit() {
    this.lLogin()
  }
  doLogin(){
    let url='http://39.105.64.170:3001/user/login'
    this.http.post(url,{uname:this.uname,upwd:this.upwd},{withCredentials:true}).subscribe((res:any):void=>{
      if(res.code==200){
        let str1='登录成功'
      this.presentToast(str1);
      this.nav.back()
      }else if(res.code==301){
        let str2='用户名或密码错误'
        this.presentToast(str2)
      }
    })
  }
  async presentToast(s:string){
    let toast=await this.toast.create({
      message:s,
      duration:2000
    })
    toast.present()
  }
  lLogin(){
    let url='http://39.105.64.170:3001/user/sessiondata'
    this.http.get(url,{withCredentials:true}).subscribe((res:any):void=>{
      console.log(res)
      if(Object.keys(res).length==0){
        this.isLogin=true;
      }else {
        this.lname=res.uname
        this.isLogin=false
      }
    })
  }
  uLogout(){
    let url='http://39.105.64.170:3001/user/logout'
    this.http.get(url,{withCredentials:true}).subscribe((res:any):void=>{
      console.log(res)
      if(res.code==200){
        let str1='退出成功'
        this.presentToast(str1);
        this.isLogin=true
      }
    })
  }
}
