import { Component } from '@angular/core';
import { Cart, Products, Services } from '../../login/customer';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bd-card',
  templateUrl: './bd-card.component.html',
  styleUrl: './bd-card.component.css'
})
export class BdCardComponent {
[x: string]: any;
 string: any;
          title:'sidelist'
          selectMenu:any='serviceName'  
          goto(paramText:string){
             this.selectMenu=paramText
          }

services:Services[]

product:Products[]

cart:Cart


constructor(private service:EventService, private router:Router){}


createService(services:Services) {
  this.service.createServices(services).subscribe((data) => {
    console.log(data)
  })
}
getServices() {
  this.service.getServices().subscribe((data) => {
    this.services = data
  })
}

// ngOnInit(){
//   this.getServices();
// }

updateServices(services: Services) { 
  if (confirm("r u sre ")) {
    this.service.createServices(services).subscribe((data) => {

      alert("updated scs")
      this.router.navigateByUrl('/events')
    })
  }


}

deleteServices(id: number) {
  if (confirm("r u sr to dlt")) {
    this.service.deleteServices(id).subscribe(() => {

      this.getServices()
    })
  }
}

createProducts(product:Products) {
  this.service.createProducts(product).subscribe((data) => {
    console.log(data)
  })
}
getProducts() {
  this.service.getProducts().subscribe((data) => {
    this.product = data
  })
}

// ngOnInit(){
//   this.getProducts();
// }

updateProducts(products: Products) { 
  if (confirm("r u sre ")) {
    this.service.createProducts(products).subscribe((data) => {

      alert("updated scs")
      this.router.navigateByUrl('/events')
    })
  }


}

deleteProducts(id: number) {
  if (confirm("r u sr to dlt")) {
    this.service.deleteProducts(id).subscribe(() => {

      this.getProducts()
    })
  }
}

ngOnInit(){
  this.getProducts();
  this.getServices();
}
 
 createCart() {

  //  this.cart.Products = [];

  // this.Products.forEach(product => {
  //    if (product.checked) {
  //      this.cart.product.push({
  //        productId: product.id,
  //        productName:product.name,
  //        productPrice:product.price,
  //        image:product.image
  //      });
  //    }
  // });

 this.service.createCart(this.cart).subscribe((data) => {
     this.router.navigateByUrl("/cart");
     console.log(data);
 })
}

}





