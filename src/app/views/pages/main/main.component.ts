import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/interfaces/card';
import { ProxyService } from '../../services/proxy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

data$!:Observable<Card[]>
  ngOnInit(): void {
    this.data$ = this.proxy.getAll();
  }
  constructor(private authservice:AuthService,private proxy:ProxyService){}
  logOut(){
this.authservice.removeTokenFromLocaStorage();
  }
}
