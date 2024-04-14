import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  constructor(private http:HttpClient) { }
  serverUrl:string = 'https://fakestoreapi.com'
  getAllProduct():Observable<any>{
  return this.http.get(`${this.serverUrl}/products`)
  }

  getById(id:string):Observable<any>{
  return  this.http.get(`${this.serverUrl}/products/${id}`)
  }
}
