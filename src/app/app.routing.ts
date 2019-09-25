import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HelloComponent } from './hello.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

 
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:id', component: LoginComponent },
    { path: 'register/:id', component: RegisterComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'landing/:id', component: LandingComponent },
     { path: 'confirmation', component: ConfirmationComponent },
    { path: 'landing', component: LandingComponent }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }