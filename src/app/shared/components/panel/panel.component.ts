import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/views/containers/modals/dialog/dialog.component';
import { BasketService } from 'src/app/views/services/basket.service';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
@Input() card:any
panelOpenState:boolean = false;

constructor(private basketService:BasketService,private matDialog:MatDialog,private proxyService:ProxyService){}
addToCart(){
this.basketService.addCardInBasket(this.card)
}


showDetails(){
  this.matDialog.closeAll();
  this.proxyService.getById(this.card.id).subscribe((res) => {
    var matDialog = this.matDialog.open(DialogComponent, {
  width:'100%',
  height:'80vh',
      data:res
    })
    matDialog.afterClosed().subscribe((res) => {
      console.log(res + 'closed')
    })
  })


}
}
