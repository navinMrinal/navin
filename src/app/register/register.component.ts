import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



@Component({
  selector: 'my-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit  {
  registerForm: FormGroup;
    loading = false;
    submitted = false;
    show: string;

    constructor(
        private formBuilder: FormBuilder,
         private route: ActivatedRoute,
        private router: Router
       
        
    ) {


    }ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.show = this.route.snapshot.paramMap.get('id');
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }

        this.loading = true;
        this.router.navigate(['landing', this.show]);
        
    }

}