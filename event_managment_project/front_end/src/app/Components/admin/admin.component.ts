import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  eventForm : FormGroup

  constructor(private service: EventService, private router: Router , private builder :FormBuilder) { }




  createEvent() {
    if(this.eventForm.valid){
      this.service.createEvent(this.eventForm.value).subscribe((data) =>{
                this.router.navigateByUrl('event')
                console.log(data)
      })
      
      
    }else{
      console.log(this.eventForm.value)
    }
    
  }
  ngOnInit(){
    this.eventForm= this.builder.group({
      eventId: ['',[Validators.required]],
      eventName:['',[Validators.required]],
      image:['',[Validators.required]]
    })
    
  }

}
