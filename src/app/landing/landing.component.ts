import { Component,OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';




@Component({
  selector: 'my-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})

export class LandingComponent implements OnInit {
 
  show:string;
  donate:boolean=false;
  request:boolean=false;
  constructor(private route: ActivatedRoute,
        private router: Router) {}
ngOnInit(){
  this.show = this.route.snapshot.paramMap.get('id');
  if(this.show==='donate'){
    this.donate = true;
  }
  else if(this.show==='request'){
    this.request=true;
  }
  
}


}