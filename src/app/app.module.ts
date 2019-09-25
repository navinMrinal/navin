import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import {AppRoutingModule} from './app.routing';




@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ,LoginComponent,RegisterComponent,LandingComponent,DonateComponent,HomeComponent,ConfirmationComponent],
  
  bootstrap:    [ AppComponent, LoginComponent,RegisterComponent,LandingComponent,DonateComponent,HomeComponent,ConfirmationComponent]
})
export class AppModule { }
