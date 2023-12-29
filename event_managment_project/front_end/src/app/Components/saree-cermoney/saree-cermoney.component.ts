import { Component } from '@angular/core';

@Component({
  selector: 'app-saree-cermoney',
  templateUrl: './saree-cermoney.component.html',
  styleUrl: './saree-cermoney.component.css'
})
export class SareeCermoneyComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
