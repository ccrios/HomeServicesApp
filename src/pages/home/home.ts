import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComponentProvider } from '../../providers/component/component';
//import { ReactiveFormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { IteratorProvider } from '../../providers/iterator/iterator';
//import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  @ViewChild('signupSlider') signupSlider;

	public slideOneForm: FormGroup;
	public slideTwoForm: FormGroup;

	public submitAttempt: boolean = false;




  
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
    public formBuilder: FormBuilder
    ) 
  {

    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['']
    });

    this.slideTwoForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      privacy: ['', Validators.required],
      bio: ['']
    });
   //this.habilidad="";
   //this.idHabilidad=1;
  // this.idHabilidadEspecifica=1;
   this.rangoPrecio= { lower: 10000, upper: 15000 };
   this.getHabilidadeslist();
   console.log(this.habilidades);
  }




  next(){
    this.signupSlider.slideNext();
  }

  prev(){
      this.signupSlider.slidePrev();
  }

  save(){

    this.submitAttempt = true;

    if(!this.slideOneForm.valid){
        this.signupSlider.slideTo(0);
    } 
    else if(!this.slideTwoForm.valid){
        this.signupSlider.slideTo(1);
    }
    else {
        console.log("success!")
        console.log(this.slideOneForm.value);
        console.log(this.slideTwoForm.value);
    }

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
