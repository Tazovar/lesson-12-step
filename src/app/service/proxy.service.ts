import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, of} from 'rxjs'

@Injectable({
    providedIn:'root'
})

export class ProxyService{
    constructor(private http:HttpClient){}
    
    getNames():Observable<string[]>{
     return  of(['tazo','giorgi','mariami','shota'])
    }

    get():Observable<any>{
        return this.http.get('https://fakestoreapi.com/products')
    }
}