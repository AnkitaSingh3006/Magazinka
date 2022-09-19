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
//   if(checkboxArray)
    //   {  let a = arr.filter((ele: any) =>{

    //       return (
    //        checkboxArray[0].checked &&( checkboxArray[0].id === ele.id)||
    //        checkboxArray[1].checked &&( checkboxArray[1].id === ele.id)||
    //        checkboxArray[2].checked &&( checkboxArray[2].id === ele.id)||
    //        checkboxArray[3].checked &&( checkboxArray[3].id === ele.id)
    //       )
    //     });
    //     console.log('data', a);

    //     return a;

    //   }
    //   return arr;
    // }



      // if (catogries && filter) {
    //   const newarr = arr.filter((ele: any) => {

    //     let result = false;

    //     catogries.forEach((cat: any, i: number) => {
    //       result = result || (ele.checkBoxId == catogries[i])
    //       console.log(result);
    //       // console.log("catogries",cat)

    //     })

    //     return result && ele[filterKey] == filter
    //   })

    //   console.log("colapsable filter new array", newarr);

    //   return newarr;
    // }

}
