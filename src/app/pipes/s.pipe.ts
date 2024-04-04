import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Subject, map, mergeMap, retry, takeUntil, tap } from 'rxjs';

@Pipe({
  name: 's'
})
export class SPipe implements PipeTransform {

  transform(value: Observable<any>, sub:Subject<any>,array:Array<any>): any {
   if(!value){
    return value
   }
    return  value.
    pipe(
      takeUntil(sub),
      map(res => {
        return res.forEach((x:any) => {
          array.push(x)
        })
        
      })
    ).subscribe()
  }

}
