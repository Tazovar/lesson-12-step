import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProxyService } from './service/proxy.service';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  sub:Subject<any> = new Subject();
arrayy:Array<any> = []
data$!:Observable<any>

  ngOnDestroy(): void {    
    this.sub.next("")
    this.sub.complete();
  }
  constructor(private proxy:ProxyService){}
//   searchText:string = ''
//   array = [
//     {
//       name:"tazo",
//       age:123
//     },
//     {
//       name:"giorgi",
// age:12    
// },
//     {
//       name:"valeri",
//       age:12
//     }
//   ]

  ngOnInit(): void {
    console.log(this.arrayy);

  this.data$ = this.proxy.get();  
  }


}
