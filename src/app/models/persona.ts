export class Persona {

    constructor( _id='',  nombre='',apellido='',telefono='',fecha='',hora='',status=''){
        this._id=_id;
        this.nombre=nombre ;
        this.apellido=apellido;
        this.telefono=telefono ;
        this.fecha=fecha ;
        this.hora=hora ;
        this.status=status ;
      
    }

    _id:string;
    nombre:string ;
    apellido:string;
    telefono:string ;
    fecha:string ;
    hora:string ;
    status:string ;
    
}
