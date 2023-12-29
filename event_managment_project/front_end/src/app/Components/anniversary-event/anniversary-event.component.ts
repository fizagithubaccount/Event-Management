import { Component } from '@angular/core';

@Component({
  selector: 'app-anniversary-event',
  templateUrl: './anniversary-event.component.html',
  styleUrl: './anniversary-event.component.css'
})
export class AnniversaryEventComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
