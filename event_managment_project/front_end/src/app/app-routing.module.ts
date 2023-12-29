import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './Components/events/events.component';
import { HomeComponent } from './Components/home/home.component';
import { BdCardComponent } from './Components/bd-card/bd-card.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
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


const routes: Routes = [
  {path:"events",component:EventsComponent},
  {path:"",component:HomeComponent},
  {path:"events/bd",component:BdCardComponent},
  {path:"events/marriage",component:MarriageCartComponent},
  {path:"events/engagement",component:EngagementComponent},
  {path:"events/reception",component:ReceptionComponent},
  {path:"events/sangeeth",component:SangeethComponent},
  {path:"events/haldhi",component:HaldhiComponent},
  {path:"events/suprise",component:SuprisePartyComponent},
  {path:"events/organization",component:OrganizationFestComponent},
  {path:"events/saree",component:SareeCermoneyComponent},
  {path:"events/cradel",component:CradelCermoneyComponent},
  {path:"events/house",component:HouseWarmingComponent},
  {path:"events/anniversary",component:AnniversaryEventComponent},
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutUsComponent},
  {path:"sign-in",component:LoginComponent},
  {path :"cart",component:CartComponent},
  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
