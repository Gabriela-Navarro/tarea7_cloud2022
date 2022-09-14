import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcion2',
  templateUrl: './opcion2.component.html',
  styleUrls: ['./opcion2.component.scss']
})
export class Opcion2Component implements OnInit {

  n1:number = 0;
  mostrarRespuesta : boolean = false;
  respuesta: number= 0;
  constructor() { }

  ngOnInit(): void {
  }
  Convertir(){
    this.mostrarRespuesta=true;
    this.respuesta =(this.n1*1.8)+32;
  }
}
