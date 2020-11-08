import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { IntervencionService } from '../../services/intervencion.service';
import { Intervencion } from 'src/app/models/intervencion';
import { Persona} from 'src/app/models/persona';
import { abort } from 'process';


@Component({
  selector: 'app-intervencion',
  templateUrl: './intervencion.component.html',
  styleUrls: ['./intervencion.component.css'],
  providers:[IntervencionService]
})
export class IntervencionComponent implements OnInit {

  dato: any;
  personas : Persona[];
  constructor(public intervencionService:IntervencionService) { }
  

  ngOnInit(): void {

    
    this.getPer();
  }

  //Guardar la consulta
  guardar(fo?:NgForm):boolean{
    var ab =false;
    
    this.intervencionService.postIntervencion(fo.value)
      .subscribe(res=>{
        this.act(this.dato);
        ab = true;
      });

      return ab;
  }
//Reiniciar formulario
  rF() : boolean {

    this.vis2();
    return true;
  }
  
//Consulta las personas para atender en el día
  getPer() : string {
    const res="";
    this.intervencionService.getPersona()
      .subscribe(res=>{
      this.intervencionService.colors = res as Persona[];
      this.personas = res as Persona[];
    }) 
    return res;
  }

  //Edita el estado del paciente atendido
  editColor(color:any):boolean{
    color.status='no';
    
    var da=document.getElementById("nombre") ;
    this.intervencionService.s.nombre= color.nombre;
    this.intervencionService.s.clave= color._id;
    this.vis();
    color.status='no';
     this.dato = color;
     
    return true;
  }
//Actualiza el registro con la api
  act(color:any):boolean{
    var ab=false;
    this.intervencionService.putPersona(color)
      .subscribe(res=>{
      
      console.log(res);
      window.location.reload();
      ab= true;  
    });
    return ab;
  }

  vis() :boolean {
    var intro = document.getElementById('form');
    intro.style.display = 'block';
    
    var intro1 = document.getElementById('form1');
    intro1.style.display = 'none';
    return true;
  }

  vis2(){
    var intro = document.getElementById('form');
    intro.style.display = 'none';
    
    var intro1 = document.getElementById('form1');
    intro1.style.display = 'block';
    
  }

}
