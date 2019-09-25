import { Component,OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';





@Component({
  selector: 'my-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})

export class LandingComponent implements OnInit {
 
  show:string;
  donate:boolean=false;
  request:boolean=false;
  private bodyText: string;
   donateForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
        private router: Router) {}
ngOnInit(){
  this.show = this.route.snapshot.paramMap.get('id');
  if(this.show==='donate'){
    this.donate = true;
  }
  else if(this.show==='request'){
    this.request=true;
  }
  this.donateForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
             medicine: ['', Validators.required],
        }); 

}
onSubmit(){
  this.router.navigate(['/login/request']);
}

}