import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HelloComponent } from './hello.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HelloComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }