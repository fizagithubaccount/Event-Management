import { Component } from '@angular/core';

@Component({
  selector: 'app-house-warming',
  templateUrl: './house-warming.component.html',
  styleUrl: './house-warming.component.css'
})
export class HouseWarmingComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
