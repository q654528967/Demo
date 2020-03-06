import { Pipe, PipeTransform } from '@angular/core';
import { a } from '@angular/core/src/render3';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args==undefined)

    if(args==false || args==undefined){
      if(value==0){
        return '女';
      }else if(value==1){
        return '男'
      }else{
        return '状态错误'
      }
    }else{
      if(value==0){
        return 'gril';
      }else if(value==1){
        return 'man'
      }else{
        return 'statu err'
      }
    }
  }

}
