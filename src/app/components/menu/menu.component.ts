import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
navegar(op:number){
  if(op==1){
    this.nav.navigateByUrl('opcion1');

  }else if(op=2){
    this.nav.navigateByUrl('opcion2');

  }
}

}
