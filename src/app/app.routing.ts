import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HelloComponent } from './hello.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DonateComponent } from './donate/donate.component';
 
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HelloComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'landing', component: LandingComponent }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }