import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Card } from 'src/app/core/interfaces/card';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit, OnDestroy{
card!:Card
unsubscribeSub$:Subject<void> = new Subject();
constructor(private proxy:ProxyService,private activatedRouter:ActivatedRoute){}
ngOnInit(): void {
  this.activatedRouter.params.subscribe((param ) => {
    let cardId = param['cardId']

    if(cardId){
      this.proxy.getById(cardId)
      .pipe(
        takeUntil(this.unsubscribeSub$)
      )
      .subscribe({
        next:(result:Card) => {
          this.card = result
        },
        error:(error) => {
          console.error(error)
        },
        complete:() => {
          console.log("complate");
          
        }
      })
    }
  })
}


ngOnDestroy(): void {
  this.unsubscribeSub$.next();
}
}
