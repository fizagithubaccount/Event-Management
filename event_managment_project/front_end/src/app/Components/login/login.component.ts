import { Component } from '@angular/core';
import { OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../service/event.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  customerForm: FormGroup;
  constructor(private renderer: Renderer2, private elementRef: ElementRef, private builder: FormBuilder, private service: EventService, private router: Router) { }

  ngOnInit() {
    const container = this.elementRef.nativeElement.querySelector('#container');
    const registerBtn = this.elementRef.nativeElement.querySelector('#register');
    const loginBtn = this.elementRef.nativeElement.querySelector('#login');

    this.customerForm = this.builder.group({

      customerName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerPassword: ['', Validators.required]

    });
    registerBtn.addEventListener('click', () => {
      this.renderer.addClass(container, 'active');

    });

    loginBtn.addEventListener('click', () => {
      this.renderer.removeClass(container, 'active');
    });
  }
 

  createCustomer() {

    if (this.customerForm.valid) {
      this.service.createCustomer(this.customerForm.value).subscribe((data) => {
        this.elementRef.nativeElement.querySelector('/login')
        console.log(data)
      })
    } else {
      console.log(this.customerForm.value)
    }

  }
  onSubmit() {
    console.log("onSubmit")
    if (this.customerForm.valid) {
      console.log("form is valid")

      this.service.createCustomer(this.customerForm.value).subscribe(response => {
        // handle the response
        console.log("successful")
        
        
      });
    }
  }

  userEmail:string;
  userPassword:string;

  login(){
    if(this.userEmail === "admin@gmail.com" && this.userPassword === "admin123"){
      alert("Login Success")
      this.router.navigateByUrl("")

    }else{
      alert("Invalid Email or Password");
    }
    console.log(this.userEmail)
    console.log(this.userPassword)
  }
}
