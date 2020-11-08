import { TestBed } from '@angular/core/testing';

import { IntervencionService } from './intervencion.service';
import { Persona } from 'src/app/models/persona';
import { Intervencion } from 'src/app/models/intervencion';

import {HttpClientModule} from '@angular/common/http';

describe('IntervencionService', () => {
  let service: IntervencionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [IntervencionService]

    });
    service = TestBed.inject(IntervencionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Verificar si me devuelve un arreglo de personas
  it('GET Personas', () => {
    const dummyPosts: Persona[] = [{
        _id: '1',
        nombre:'nombre' ,
        apellido:'apellido',
        telefono:'telefono' ,
        fecha:'fecha' ,
        hora:'hora' ,
        status:'lad'
       }, {
       _id: '2',
       nombre:'nombre1' ,
        apellido:'apellido1',
        telefono:'telefono1' ,
        fecha:'fecha1' ,
        hora:'hora1' ,
        status:'status1' 
    }];
    service.getPersona().subscribe(posts => {
      
      expect(posts).toEqual(dummyPosts);
    });

  });

  it('PUT Persona', () => {
    const dummyPosts: Persona = {
        _id: '',
        nombre:'nombre' ,
        apellido:'apellido',
        telefono:'telefono' ,
        fecha:'fecha' ,
        hora:'hora' ,
        status:'status' 
       };
        service.putPersona(dummyPosts).subscribe(posts => {
      
      expect(posts).toEqual('Color Actualizado');
    });

  });

  
  it('POST Intervencion', async() => {
    const dummyPosts: Intervencion = {
        _id: '',
        nombre:'nombre' ,
        clave:'string',
        sintomas:'string ',
        diagnostico:'string' ,
        notas:'string' ,
        tratamiento:'string' 
       };
        await service.postIntervencion(dummyPosts).subscribe(posts => {
      
      expect(posts).toEqual('Consulta Guardada');
    });

  });


});
