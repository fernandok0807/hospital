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
  constructor(public intervencionService:IntervencionService) { }
  

  ngOnInit(): void {

    console.log('Iniciando Intervencion');
    this.getPer();
  }

  guardar(fo?:NgForm){

    
    
    console.log(fo.value);
    this.intervencionService.postColor(fo.value)
      .subscribe(res=>{
        console.log(res);
        
        
        this.act(this.dato);
        
      })
    
  }

  rF(){
    this.vis2();

  }

  getPer(){
    this.intervencionService.getPersona()
      .subscribe(res=>{
      this.intervencionService.colors= res as Persona[];
      console.log(res);
    }) 
  }

  editColor(color:any){
    color.status='no';
    
    var da=document.getElementById("nombre") ;
    this.intervencionService.s.nombre= color.nombre;
    this.intervencionService.s.clave= color._id;
    this.vis();
    color.status='no';
     this.dato = color;
     

  }

  act(color:Persona){

    this.intervencionService.putPersona(color)
      .subscribe(res=>{
        
      console.log(res);
      window.location.reload();
    });
  }

  vis(){
    var intro = document.getElementById('form');
    intro.style.display = 'block';
    
    var intro1 = document.getElementById('form1');
    intro1.style.display = 'none';
    
  }
  vis2(){
    var intro = document.getElementById('form');
    intro.style.display = 'none';
    
    var intro1 = document.getElementById('form1');
    intro1.style.display = 'block';
    
  }

}
