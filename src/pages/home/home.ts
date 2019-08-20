import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ComponentProvider } from '../../providers/component/component';
//import { ReactiveFormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioAsignadoPage } from '../servicio-asignado/servicio-asignado';
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
  habilidad: any;
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

  users: any;

  constructor(
    public navCtrl: NavController, 
    public component: ComponentProvider,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController
    ) 
  {

    this.slideOneForm = formBuilder.group({

      habilidadF: ['', Validators.compose([Validators.required])],
      habilidadEspecificaF: ['', Validators.compose([Validators.required])],
      fechaServicioF: ['', Validators.compose([Validators.required])],
      horaServicioF: ['', Validators.compose([Validators.required])],
      cantidadDeHorasF:['']

  
    });

    this.slideTwoForm = formBuilder.group({
      rangoPrecioF: [ '' ],
      direccionF:  ['', Validators.compose([Validators.required])],
      descripcion: ['']
  
    });
   this.rangoPrecio= { lower: 10000, upper: 15000 };
   this.getHabilidadeslist();
  }

  verMensajeServicioInvalida() {
    const alert = this.alertCtrl.create({
      title: 'Solicitud Invalida',
      subTitle: 'Lo sentimos, en este momento no contamos con disponibilidad de servicio de acuerdo a lo seleccionado.',
      buttons: ['Ok']
    });
    alert.present();
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


  
mortrarServicio( servicioAsignado: any ){
  this.navCtrl.push(ServicioAsignadoPage,servicioAsignado);
}



  cambiarHabilidad() {
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
      if(data!=null){
        alert("sii");
        console.log(data);
          this.mortrarServicio(data);
        }else
        {
          alert("noo");
          this.verMensajeServicioInvalida();
        }


      console.log(data);
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
