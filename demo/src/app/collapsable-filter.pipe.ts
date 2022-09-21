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



    let newarr = arr;

    if (!catogries && !arr) {
      return arr;
    }

    if (catogries && catogries.length) {
      newarr = newarr.filter(x => catogries.includes(x.checkBoxId))
      console.log('catogries', newarr)

    }
    if (filter) {

      newarr = newarr.filter((ele: any) => {

        return ele[filterKey] == filter
      })
      console.log('filter', filter);

    }

    return newarr;

  }

}
