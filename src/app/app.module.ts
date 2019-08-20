import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

import { HttpClientModule } from '@angular/common/http';
import { IteratorProvider } from '../providers/iterator/iterator';
import { ComponentProvider } from '../providers/component/component';
import { HeaderPage } from '../pages/header/header';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioAsignadoPage } from '../pages/servicio-asignado/servicio-asignado';
import { DetalleDeServicioPage } from '../pages/detalle-de-servicio/detalle-de-servicio';







@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ServicioAsignadoPage,
    DetalleDeServicioPage,
    HeaderPage,
    DetalleDeServicioPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ServicioAsignadoPage,
    DetalleDeServicioPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    IteratorProvider,
    ComponentProvider
  ]
})
export class AppModule {}
