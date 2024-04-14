import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }


  baskterArray:Array<any> = [];
  basketArrayLengthEmitter:EventEmitter<any> = new EventEmitter();


  getBasket(){
    return this.baskterArray
  }


  addCardInBasket(card:any){

    let finCard = this.getBasket().find((cardd) => {
      return cardd.id == card.id
    })
    if(finCard){
      alert("this card already exists")
    }else{
      this.baskterArray.push(card)
      this.basketArrayLengthEmitter.emit(this.baskterArray.length)
    }
  }


  deleteCard(cardId:number){
    this.baskterArray = this.baskterArray.filter((card) => {
      return card.id != cardId
    } )

    this.basketArrayLengthEmitter.emit(this.baskterArray.length)
  }
}