import { Component } from '@angular/core';

@Component({
  selector: 'app-suprise-party',
  templateUrl: './suprise-party.component.html',
  styleUrl: './suprise-party.component.css'
})
export class SuprisePartyComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
