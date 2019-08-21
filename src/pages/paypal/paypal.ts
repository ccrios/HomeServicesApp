import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioAsignadoPage } from '../servicio-asignado/servicio-asignado';

/**
 * Generated class for the PaypalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paypal',
  templateUrl: 'paypal.html',
})
export class PaypalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaypalPage');
  }

  atras(){
    this.navCtrl.push(ServicioAsignadoPage);
  }

}
