import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app.routing';



@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ,LoginComponent,RegisterComponent],
  bootstrap:    [ AppComponent, LoginComponent,RegisterComponent]
})
export class AppModule { }
