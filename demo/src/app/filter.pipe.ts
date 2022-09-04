import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], selectedValue: any, keyname: string): any[] {
    console.log("array", array)

    if(selectedValue){
      const newarr = array.filter((ele: any) => {

        return ele[keyname] == selectedValue
      })
      console.log(newarr);

      return newarr;
    }

  return array;
  }


}
