import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signupForm: FormGroup
  
  constructor( 
    private _builder: FormBuilder
   ){

    this.signupForm = this._builder.group({
      nombre: [''],
      usuario:  ['',Validators.required],
      email:  ['',Validators.compose([Validators.email, Validators.required])],
      clave: ['',Validators.required] 
    })

   }

   enviar(values){
     console.log(values)
   }

}
