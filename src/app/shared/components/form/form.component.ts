import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnDestroy,OnInit {
  subscription:Subscription = new Subscription();
  @Input() currenTitle!:string
  @Output () updateProductEmitter:EventEmitter<any> = new EventEmitter()
  @Input() currentPrice!:number
  @Input() id!:number
data:any = {
  title:"",
  price:null
}


ngOnInit(): void {
  this.data.title = this.currenTitle
  this.data.price = this.currentPrice
}


constructor(private _proxyService:ProxyService){}

update(){
  let newObject = {...this.data}
  this.subscription = this._proxyService.updateProduct(this.id, newObject)
  .subscribe({
    next:(response:any) => {
console.log(response)
this.updateProductEmitter.emit(response) 
    },
    error:(error:Error) => {
      console.log(error)
    },
    complete:() => {
      console.log("complated")
    }
  })
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
