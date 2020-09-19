import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Parte 7
  usuarios = []
  
  constructor( private _http: HttpClient ){}

  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((datos: any[]) => this.usuarios = datos)    
  }

  //Si se usara el metodo de @Output para borrar usuarios, se deberia usar esta funcion
  // borrarUsuario(id: number){
  //   this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  // }
}
