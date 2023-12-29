import { Component } from '@angular/core';

@Component({
  selector: 'app-organization-fest',
  templateUrl: './organization-fest.component.html',
  styleUrl: './organization-fest.component.css'
})
export class OrganizationFestComponent {

  string: any;
          title:'sidelist'
          selectMenu:any='Hospitality'    
          
          goto(paramText:string){
             this.selectMenu=paramText
          }

}
