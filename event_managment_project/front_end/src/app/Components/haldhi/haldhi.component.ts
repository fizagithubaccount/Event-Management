import { Component } from '@angular/core';

@Component({
  selector: 'app-haldhi',
  templateUrl: './haldhi.component.html',
  styleUrl: './haldhi.component.css'
})
export class HaldhiComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
