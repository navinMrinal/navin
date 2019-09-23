import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'my-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})

export class LandingComponent implements OnInit {
 
  show:any;
  constructor() {}
ngOnInit(){
  const id = this.route.snapshot.paramMap.get('id');
  
}


}