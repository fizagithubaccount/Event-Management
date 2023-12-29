import { Component } from '@angular/core';

@Component({
  selector: 'app-cradel-cermoney',
  templateUrl: './cradel-cermoney.component.html',
  styleUrl: './cradel-cermoney.component.css'
})
export class CradelCermoneyComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
