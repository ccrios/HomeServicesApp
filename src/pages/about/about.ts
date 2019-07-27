import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public event;
  credentialsForm: FormGroup;

  constructor(public navCtrl: NavController,private formBuilder: FormBuilder) {

    this.credentialsForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  


      this.event = {
      month: '1990-02-19',
      timeStarts: '07:43',
      timeEnds: '1990-02-20'
    }

  }

  

}
