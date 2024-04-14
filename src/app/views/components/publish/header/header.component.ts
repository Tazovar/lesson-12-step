import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/views/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
matBadgeCount:number = 0;

constructor(private basketService: BasketService) {
  
}

ngOnInit(): void {
  this.basketService.basketArrayLengthEmitter.subscribe((response) => {
    this.matBadgeCount = response
  })
}
}
