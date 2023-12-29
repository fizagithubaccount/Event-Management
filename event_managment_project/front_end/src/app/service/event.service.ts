import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, Customer, Events, Products, Services } from '../login/customer';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  basePath1 = "http://localhost:8181/myapp/api/event"
  basePath2 = "http://localhost:8181/myapp/api/customer"
  basePath3="http://localhost:8181/myapp/api/product"
  basePath4 = "http://localhost:8181/myapp/api/service"
  basepath5="http://localhost:8181/myapp/api/cart"


  constructor(private http:HttpClient) { }

  createCustomer(customer:Customer):Observable<any>{
    return this.http.post<Customer>(this.basePath2, customer);
  }

  createEvent(events:Events):Observable<Events>{
    return this.http.post<Events>(this.basePath1, events)
  }

  deleteEvent(id:number):Observable<any>{
    return this.http.delete<Events>(this.basePath1+"/"+id)
  }

  getEvents():Observable<Events[]>{
    return this.http.get<Events[]>(this.basePath1)
  }

  updateEvent(events:Events):Observable<Events>{
    return this.http.post<Events>(this.basePath1, events)
  }

  createProducts(products:Products):Observable<Products>{
    return this.http.post<Products>(this.basePath3, products)
  }

  deleteProducts(id:number):Observable<any>{
    return this.http.delete<Products>(this.basePath3+"/"+id)
  }

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this.basePath3)
  }

  updateProducts(products:Products):Observable<Products>{
    return this.http.post<Products>(this.basePath3, Products)
  }

  createServices(services:Services):Observable<Services>{
    return this.http.post<Services>(this.basePath4, services)
  }

  deleteServices(id:number):Observable<any>{
    return this.http.delete<Services>(this.basePath4+"/"+id)
  }

  getServices():Observable<Services[]>{
    return this.http.get<Services[]>(this.basePath4)
  }

  updateService(services:Services):Observable<Services>{
    return this.http.post<Services>(this.basePath4, Services)
  }
  createCart(cart:Cart):Observable<Cart>{
    return this.http.post<Cart>(this.basepath5, cart)
  }
  deleteCart(id:number):Observable<any>{
    return this.http.delete<Cart>(this.basepath5+"*"+id)
  }
  getCart():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.basepath5)
  }
  updateCart(cart:Cart):Observable<Cart>{
    return this.http.put<Cart>(this.basepath5,cart)
  }

}
