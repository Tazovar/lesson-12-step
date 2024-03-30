import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/interfaces/card';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProxyService {

  serverUrl:string  = 'https://fakestoreapi.com'
constructor(private http:HttpClient){}
  
  getAll():Observable<Card[]>{
  return this.http.get<Card[]>(`${this.serverUrl}/products`) 
  }

  getById(id:number):Observable<Card>{
    return this.http.get<Card>(`${this.serverUrl}/products/${id}`)
  }
}
