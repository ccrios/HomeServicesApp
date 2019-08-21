import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleDeServicioPage } from '../detalle-de-servicio/detalle-de-servicio';
import { HomePage } from '../home/home';
import { InfoPsPage } from '../info-ps/info-ps';
import { PaypalPage } from '../paypal/paypal';


/**
 * Generated class for the ServicioAsignadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-servicio-asignado',
  templateUrl: 'servicio-asignado.html',
})
export class ServicioAsignadoPage {

  datosServicio: any;
  servicio: any;
  cliente: any;
  ps: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datosServicio = navParams.data;
    this.ps = this.datosServicio.PSHabilidadEspecifica.PrestadorServicio;
    this.cliente = this.datosServicio.Cliente;

  }

  mostrarDetallesService() {
    this.navCtrl.push(DetalleDeServicioPage, this.datosServicio);
  }

  mostrarInfoPS(){
    this.navCtrl.push(InfoPsPage, this.datosServicio);
  }

  cancelar() {
    this.navCtrl.push(HomePage);
  }
  aceptar() {
    this.navCtrl.push(PaypalPage);
  }

}
