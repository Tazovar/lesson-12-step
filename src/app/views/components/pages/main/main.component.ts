import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxyService } from 'src/app/views/services/proxy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
productsData$!:Observable<any>

constructor(private proxyService:ProxyService){}

ngOnInit(): void {
  this.productsData$ = this.proxyService.getAllProduct();
}
}
