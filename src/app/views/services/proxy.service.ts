import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, retry } from "rxjs";
import { Product } from "src/app/core/interface/product";


@Injectable({
    providedIn:"root"
})

export class ProxyService{
    // GET,POST,PUT,DELETE
    serverUrl:string = "https://fakestoreapi.com"

    getAllProducts():Observable<Product[]>{
        const header = new HttpHeaders({'Content-Type':'application/json'})
        return this.http.get<Product[]>(`${this.serverUrl}/products`,{
            headers:header
        })
    }


    updateProduct(_id:number,data:any){
    return this.http.put(`${this.serverUrl}/products/${_id}`,data)
    }

    addNewCard(data:any){
    return this.http.post(`${this.serverUrl}/products`,data)
    }


    deleteProduct(_id:number){
        return this.http.delete(`${this.serverUrl}/products/${_id}`)
        }

        getById(id:number):Observable<Product>{
            return this.http.get<Product>(`${this.serverUrl}/products/${id}`)
        }

    constructor(private http:HttpClient) {}

}