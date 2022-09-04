import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr:any[], selectedValue:any, keyname:string): any[] {
    if(!selectedValue){
      return arr;
    }
    const newarr=arr.filter((ele:any)=>{
     
      return ele[keyname]==selectedValue
    })
    
    return newarr;
  }
  

}
