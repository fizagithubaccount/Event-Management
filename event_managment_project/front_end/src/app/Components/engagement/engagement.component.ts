import { Component } from '@angular/core';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.css'
})
export class EngagementComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
