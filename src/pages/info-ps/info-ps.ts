import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioAsignadoPage } from '../servicio-asignado/servicio-asignado';

/**
 * Generated class for the InfoPsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info-ps',
  templateUrl: 'info-ps.html',
})
export class InfoPsPage {

  datosServicio: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datosServicio = navParams.data;
    // console.log(this.datosServicio);
  }

  continuar() {
    this.navCtrl.push(ServicioAsignadoPage, this.datosServicio);
  }

}
