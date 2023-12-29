import { Component } from '@angular/core';

@Component({
  selector: 'app-sangeeth',
  templateUrl: './sangeeth.component.html',
  styleUrl: './sangeeth.component.css'
})
export class SangeethComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
