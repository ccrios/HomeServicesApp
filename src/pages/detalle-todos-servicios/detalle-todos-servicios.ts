import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the DetalleTodosServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-todos-servicios',
  templateUrl: 'detalle-todos-servicios.html',
})
export class DetalleTodosServiciosPage {

  datosServicio: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datosServicio = navParams.data;
  }

  continuar() {
    this.navCtrl.push(AboutPage, this.datosServicio);
  }
}
