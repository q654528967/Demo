import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value==0){
      return '订单未提交';
    }else if(value==1){
      return '订单处理中'
    }else if(value==2){
      return '订单完成'
    }else{
      return '订单状态未知'
    }
  }

}
