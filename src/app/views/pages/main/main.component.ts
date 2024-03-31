import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/interface/product';
import { ProxyService } from '../../services/proxy.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
productsArray:Array<Product> = [];
@Output() emitter:EventEmitter<string> = new EventEmitter() 
unsubscribeSubject$:Subject<string> = new Subject()
constructor(private _proxyService:ProxyService){}

ngOnInit(): void {
 this._proxyService.getAllProducts()
 .pipe(
  takeUntil(this.unsubscribeSubject$)
 )
 .subscribe({
  next:(result:Product[]) => {
  this.productsArray = result
  console.log(this.productsArray)
  },
  error:(error:Error) =>{
    console.error(error)
  }
 }) 
}


deletedProductEmitter(event:Product | any){

  if(event){
    this.productsArray = this.productsArray.filter((p) => {
      return p.id != event.id
    })
  }


}

ngOnDestroy(): void {
this.unsubscribeSubject$.next('');
this.unsubscribeSubject$.complete();
}
}
