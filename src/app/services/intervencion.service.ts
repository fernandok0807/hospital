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


  postColor(Color:Intervencion){
    return this.http.post(this.URL+'notas',Color);
  }

  getPersona(){
    return this.http.get(this.URL+'persona/si');
  }

  putPersona(Info:Persona){
    return this.http.put(this.URL+'persona/'+Info._id,Info);

  }

}
