import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentProvider } from '../../providers/component/component';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { IteratorProvider } from '../../providers/iterator/iterator';
//import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  habilidades: any;
  users: any;


  habilidad:any;
  idHabilidad:number;

  habilidadEspecifica:any;
  idHabilidadEspecifica:number;

  fechaServicio:string;
  horaServicio:string;

  cantidadDeHoras:number;

  rangoPrecio: any;

  direccion: any;

  descripcion: any;

  manual:boolean;

  //credentialsForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public component: ComponentProvider,
    //private formBuilder: FormBuilder
    ) 
  {


   //this.habilidad="";
   //this.idHabilidad=1;
  // this.idHabilidadEspecifica=1;
    this.rangoPrecio= { lower: 10000, upper: 15000 };
   this.getHabilidadeslist();
   console.log(this.habilidades);
  }


  cambiarHabilidad(value: any) {
    this.habilidades.forEach(element => {
      if(element.Id==this.idHabilidad){
          this.habilidad=element;
      }
    });
  }

  cambiarHabilidadEspecifica(value: any) {
    this.habilidad.HabilidadesEspecificas.forEach(element => {
      if(element.Id==this.idHabilidadEspecifica){
          this.habilidadEspecifica=element;
      }
    });
  }
  
  
  
  getHabilidadeslist(){

    this.component.getHabilidades()
    .then(data => {
      this.habilidades = data;
      console.log(this.habilidades);
    });
  }

  enviarDatosDeFormulario(){
    this.component.enviarHabilidades(this.idHabilidadEspecifica,this.descripcion,this.horaServicio,this.cantidadDeHoras,
     this.fechaServicio,this.direccion,this.rangoPrecio.lower,this.rangoPrecio.upper,true,10)
    .then(data => {
      alert(data);
      alert("creado");
    });


  }

  jsonForm={
    "habilidadEspecificaId": 1,
    "Descripcion": "sample string 2",
    "HoraServicio": "2019-07-26T18:47:41.849285-05:00",
    "HorasEstimadas": 4,
    "FechaServicio": "2019-07-26T18:47:41.849285-05:00",
    "DireccionServicio": "sample string 6",
    "PrecioMinimo": 7.0,
    "PrecioMaximo": 8.0,
    "PSPersonal": true,
    "ClienteId": 10
  };
  
  

}
