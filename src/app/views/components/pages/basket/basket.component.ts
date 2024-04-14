import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/views/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','delete'];
  dataSource:any  = []

  constructor(private basketService:BasketService){}
  ngOnInit(): void {
this.dataSource =     this.basketService.getBasket()
  }

  deleteCard(itemId:number){
this.basketService.deleteCard(itemId)
this.dataSource = this.basketService.getBasket()
  }
}
