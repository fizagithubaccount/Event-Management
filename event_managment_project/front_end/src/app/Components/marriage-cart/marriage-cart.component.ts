import { Component } from '@angular/core';

@Component({
  selector: 'app-marriage-cart',
  templateUrl: './marriage-cart.component.html',
  styleUrl: './marriage-cart.component.css'
})
export class MarriageCartComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
