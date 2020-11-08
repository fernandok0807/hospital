export class Intervencion {

    constructor( _id='',  nombre='',clave='',sintomas='',diagnostico='',notas='',tratamiento=''){
        this._id=_id;
        this.nombre=nombre ;
        this.clave=clave;
        this.sintomas=sintomas ;
        this.tratamiento=tratamiento ;
        this.diagnostico=diagnostico ;
        this.notas=notas ;
      
    }

    _id:string;
    nombre:string ;
    clave:string;
    sintomas:string ;
    diagnostico:string ;
    notas:string ;
    tratamiento:string ;
    
}
