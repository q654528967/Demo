import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import {MyDemoRoutingModule} from './my-demo/my-demo-routing.module'

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02LianxiComponent } from './demo02-lianxi/demo02-lianxi.component';
import { Demo03DirectiveComponent } from './demo03-directive/demo03-directive.component';
import { Demo04DorComponent } from './demo04-dor/demo04-dor.component';
import { Demo05HeaderComponent } from './demo05-header/demo05-header.component';
import { Demo05CartComponent } from './demo05-cart/demo05-cart.component';
import { Demo06ModleComponent } from './demo06-modle/demo06-modle.component';
import { Demo08PipeComponent } from './demo08-pipe/demo08-pipe.component';
import { OrderPipe } from './order.pipe';
import { GenderPipe } from './gender.pipe';
import { Demo09ServiceComponent } from './demo09-service/demo09-service.component';
import { Demo10OrderComponent } from './demo10-order/demo10-order.component';
import { Demo10ListComponent } from './demo10-list/demo10-list.component';
import { Demo11HeaderComponent } from './demo11-header/demo11-header.component';
import { Demo11CartComponent } from './demo11-cart/demo11-cart.component';
import { Demo12ListComponent } from './demo12-list/demo12-list.component';
import { Demo12ItemComponent } from './demo12-item/demo12-item.component';
import { Demo13HttpComponent } from './demo13-http/demo13-http.component';
import { Demo13LianxiComponent } from './demo13-lianxi/demo13-lianxi.component';
import { from } from 'rxjs';
import { Demo15LoginComponent } from './demo15-login/demo15-login.component';
import { Demo15RegisterComponent } from './demo15-register/demo15-register.component';
import { Demo16ListComponent } from './demo16-list/demo16-list.component';
import { Demo16DetailComponent } from './demo16-detail/demo16-detail.component';
import { Demo17ListComponent } from './demo17-list/demo17-list.component';
import { Demo17CheckComponent } from './demo17-check/demo17-check.component';
import { Demo18MailComponent } from './demo18-mail/demo18-mail.component';
import { Demo18InboxComponent } from './demo18-inbox/demo18-inbox.component';
import { Demo18OutboxComponent } from './demo18-outbox/demo18-outbox.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02LianxiComponent,
    Demo03DirectiveComponent,
    Demo04DorComponent,
    Demo05HeaderComponent,
    Demo05CartComponent,
    Demo06ModleComponent,
    Demo08PipeComponent,
    OrderPipe,
    GenderPipe,
    Demo09ServiceComponent,
    Demo10OrderComponent,
    Demo10ListComponent,
    Demo11HeaderComponent,
    Demo11CartComponent,
    Demo12ListComponent,
    Demo12ItemComponent,
    Demo13HttpComponent,
    Demo13LianxiComponent,
    Demo15LoginComponent,
    Demo15RegisterComponent,
    Demo16ListComponent,
    Demo16DetailComponent,
    Demo17ListComponent,
    Demo17CheckComponent,
    Demo18MailComponent,
    Demo18InboxComponent,
    Demo18OutboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyDemoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
