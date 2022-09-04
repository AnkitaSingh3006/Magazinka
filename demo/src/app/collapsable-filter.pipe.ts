import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collapsableFilter'
})
export class CollapsableFilterPipe implements PipeTransform {

  transform(arr: any[],checkboxArray: any[], time: any): any[] {
     console.log('arr', arr);

    if(checkboxArray)
    {  let a = arr.filter((ele: any) =>{
        
        return (
         checkboxArray[0].checked &&( checkboxArray[0].id === ele.id)||
         checkboxArray[1].checked &&( checkboxArray[1].id === ele.id)||
         checkboxArray[2].checked &&( checkboxArray[2].id === ele.id)||
         checkboxArray[3].checked &&( checkboxArray[3].id === ele.id)
        )
      });
      console.log('data', a);
      
      return a;
      
    }
    return arr;
  }

}
