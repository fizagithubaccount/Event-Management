import { Component } from '@angular/core';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrl: './reception.component.css'
})
export class ReceptionComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
