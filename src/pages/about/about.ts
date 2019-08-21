import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentProvider } from '../../providers/component/component';
import { DetalleTodosServiciosPage } from '../detalle-todos-servicios/detalle-todos-servicios';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public event;
  credentialsForm: FormGroup;
  servicios: any;
  constructor(public navCtrl: NavController, 
    private formBuilder: FormBuilder,
    public component: ComponentProvider) {

    this.credentialsForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

    this.event = {
      month: '1990-02-19',
      timeStarts: '07:43',
      timeEnds: '1990-02-20'
    };

    this.getServicioslist();
  }

  getServicioslist() {
    this.component.getServicios()
      .then(data => {
        this.servicios = data;
        //console.log(this.servicios)
      });
  }

  verDetalle(servicio){
    //console.log(servicio);
    this.navCtrl.push(DetalleTodosServiciosPage, servicio);

  }
}
