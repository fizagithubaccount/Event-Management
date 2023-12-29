import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import { Events, Products, Services } from '../../login/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  events: Events[]

  


  constructor(private service: EventService, private router: Router , private builder :FormBuilder) { }

  createEvent(event:Events) {
    
      this.service.createEvent(event).subscribe((data) =>{
                this.router.navigateByUrl('/event')
                console.log(data)
      })
      
      
    
  }
  getEvents() {
    this.service.getEvents().subscribe((data) => {
      this.events = data
    })
  }

  ngOnInit(){
    
    this.getEvents();
  }

  updateEvent(events: Events) {
    if (confirm("r u sre ")) {
      this.service.createEvent(events).subscribe((data) => {

        alert("updated scs")
        this.router.navigateByUrl('/events')
      })
    }


  }

  deleteEvent(id: number) {
    if (confirm("r u sr to dlt")) {
      this.service.deleteEvent(id).subscribe(() => {

        this.getEvents()
      })
    }
  }
 
  

}
