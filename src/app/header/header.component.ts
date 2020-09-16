import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tut-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { 
    console.log('Componente header creandose.');
  }

  ngOnInit(){
    console.log('Componente header ya creado.');
  }

  nombre = "Nicolas"

  cambiarNombre(){
    this.nombre = 'GF';
  }
}
