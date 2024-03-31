import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../../services/proxy.service';
import { Product } from 'src/app/core/interface/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
data!:Product
  constructor(private _proxy:ProxyService,private activatedRouter:ActivatedRoute){}

  ngOnInit(): void {    
    this.activatedRouter.params.subscribe((param) => {
      let id = param['id'];


      if(id){
        this._proxy.getById(id)
        .subscribe((response) => {
          console.log(response)
          this.data = response
        })
      }
    })
  }
}
