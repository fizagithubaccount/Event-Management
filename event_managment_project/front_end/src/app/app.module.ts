import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './Components/events/events.component';
import { BdCardComponent } from './Components/bd-card/bd-card.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './Components/review/review.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarriageCartComponent } from './Components/marriage-cart/marriage-cart.component';
import { EngagementComponent } from './Components/engagement/engagement.component';
import { ReceptionComponent } from './Components/reception/reception.component';
import { SangeethComponent } from './Components/sangeeth/sangeeth.component';
import { HaldhiComponent } from './Components/haldhi/haldhi.component';
import { SuprisePartyComponent } from './Components/suprise-party/suprise-party.component';
import { OrganizationFestComponent } from './Components/organization-fest/organization-fest.component';
import { SareeCermoneyComponent } from './Components/saree-cermoney/saree-cermoney.component';
import { CradelCermoneyComponent } from './Components/cradel-cermoney/cradel-cermoney.component';
import { HouseWarmingComponent } from './Components/house-warming/house-warming.component';
import { AnniversaryEventComponent } from './Components/anniversary-event/anniversary-event.component';
import { CartComponent } from './Components/cart/cart.component';
import { AdminComponent } from './Components/admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    BdCardComponent,
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    ReviewComponent,
    MarriageCartComponent,
    EngagementComponent,
    ReceptionComponent,
    SangeethComponent,
    HaldhiComponent,
    SuprisePartyComponent,
    OrganizationFestComponent,
    SareeCermoneyComponent,
    CradelCermoneyComponent,
    HouseWarmingComponent,
    AnniversaryEventComponent,
    CartComponent,
    AdminComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  
   
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
