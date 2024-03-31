import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/interface/product';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() product:Product = {} as Product
@Output() deletedProductEmitter = new EventEmitter<Product>()

constructor(private _proxy:ProxyService,private router:Router){}
ngOnInit(): void {
}

updateProductEmitterSub(event:any){
    if(event){
      this.product.title = event.title
      this.product.price= event.price
    }
}

deleteProduct(){
  this._proxy.deleteProduct(this.product.id)
  .subscribe((res:Product | any) => {
    this.deletedProductEmitter.emit(res)
  })
}

goDetails(){
this.router.navigate(['/details', this.product.id])
}
}
