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


    if (catogries && filter) {
      const newarr = arr.filter((ele: any) => {

        let result = false;

        catogries.forEach((cat: any, i: number) => {
          result = result || (ele.checkBoxId == catogries[i])
          console.log(result);
          // console.log("catogries",cat)

        })

        return result && ele[filterKey] == filter
      })

      console.log("colapsable filter new array", newarr);

      return newarr;
    }



    if (filter) {

      return arr.filter((ele: any) => {

        return ele[filterKey] == filter
      })
    }

    if (catogries) {
      const newarr = arr.filter((ele: any) => {

        let result = false;

        catogries.forEach((cat: any, i: number) => {
          result = result || (ele.checkBoxId == catogries[i])
          console.log(result);

        })

        return result
      })

      console.log("colapsable filter new array", newarr);

      return newarr;

    }

    return arr





  }
}
