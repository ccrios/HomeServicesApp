import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioAsignadoPage } from '../servicio-asignado/servicio-asignado';

/**
 * Generated class for the DetalleDeServicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detalle-de-servicio',
  templateUrl: 'detalle-de-servicio.html',
})
export class DetalleDeServicioPage {
  datosServicio: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datosServicio = navParams.data;
  }

  continuar() {
    this.navCtrl.push(ServicioAsignadoPage, this.datosServicio);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleDeServicioPage');
  }



}
