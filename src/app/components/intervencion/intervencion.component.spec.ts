import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervencionComponent } from './intervencion.component';

import { throwError, of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Persona } from 'src/app/models/persona';

import { IntervencionService } from '../../services/intervencion.service';
import { NgForm } from '@angular/forms';

import {FormsModule} from '@angular/forms';

describe('IntervencionComponent', () => {
  let component: IntervencionComponent;
  
  let fixture: ComponentFixture<IntervencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ IntervencionComponent ],
      providers:[IntervencionService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Test Reniciar Formulario', async()=>{
   
    const prueba = component.rF(); 
    expect(prueba).toEqual(true);

  });

  it('Test Mostrar Formulario', async()=>{
   
    const prueba = component.vis(); 
    expect(prueba).toEqual(true);
 
   });
 
   it('Editar estado de persona', async()=>{
    const dummyPosts: Persona = {
      _id: '1',
      nombre:'nombre' ,
      apellido:'apellido',
      telefono:'telefono' ,
      fecha:'fecha' ,
      hora:'hora' ,
      status:'status' 
     };
    const prueba = component.editColor(dummyPosts); 
    expect(prueba).toEqual(true);

  });

  
   it('Guardar Consulta', async()=>{
   
    const testForm = <NgForm>{  
      value: {
          nombre: "Hello",
          
    clave:'string',
    sintomas:'string' ,
    diagnostico:'string' ,
    notas:'string' ,
    tratamiento:'string' 
    
      }
  };
  spyOn(component,'guardar').and.returnValue(true);
  var prueba = component.guardar(testForm);
  console.log(prueba);
  expect(prueba).toEqual(false);
  
 
   });
 
 


});
