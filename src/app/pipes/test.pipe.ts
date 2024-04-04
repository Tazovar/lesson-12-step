import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value:any[] , searchText:string): any {

    if(value.length == 0 || !searchText){
      return value
    }
    return value.filter((val) => {
      return val.name.toLowerCase().includes(searchText.toLowerCase());
    })
  //   if(!value){
  //     return value
  //   }
  // if(typeof value == 'number'){
  //   return value + 2
  // }else if (typeof value == 'string'){
  //   return value.replaceAll('_', '/')
  // }

}
}