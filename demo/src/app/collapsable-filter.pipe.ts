import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collapsableFilter'
})
export class CollapsableFilterPipe implements PipeTransform {

  transform(arr: any[], catogries: any[], filter: any, filterKey: any) {
    // console.log('colapsableFilter', arr, catogries, filter, filterKey);

    //step1 - filter on basis of array "catogries" on arr
    //step2 - filter on basis of array "filter" on arr
    //return array 



    let newarr = []

    if (!catogries) {
      return arr;
    }

    if (catogries) {
      newarr = arr.filter((ele: any) => {

        let result = false;

        catogries.forEach((cat: any, i: number) => {
          result = result || (ele.checkBoxId == catogries[i])
          console.log(result);

        })

        return result
      })

    }
    if (filter) {

      return newarr.filter((ele: any) => {

        return ele[filterKey] == filter
      })
    }

    return newarr;

  }

}
