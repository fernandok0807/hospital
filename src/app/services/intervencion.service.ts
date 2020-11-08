import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Intervencion} from '../models/intervencion';
import {Persona} from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class IntervencionService {

  URL= 'https://hospitaldiag.herokuapp.com/api/';
  colors:Persona[];
  s: Intervencion;

  constructor(private http:HttpClient) { 
  this.s = new Intervencion();

  }

//Consume la api para ver las personas que debe atender en el día
  getPersona(){
    return this.http.get(this.URL+'persona/si');
  }

// Agrega un registro de atencion al paciente
  postIntervencion(intervencion:Intervencion){
    return this.http.post(this.URL+'notas',intervencion);
  }

  // Actaliza la el registro de la persona que ya se atendio
  putPersona(Info:Persona){
    return this.http.put(this.URL+'persona/'+Info._id,Info);
  }

}
