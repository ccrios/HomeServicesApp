import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IteratorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IteratorProvider {

  apiUrlHabilidades = 'https://jsonplaceholder.typicode.com';
  apiUrlEnviarSolicitud='https://jsonplaceholder.typicode.com';
  //localhost/api/Servicios?habilidadEspecificaId={habilidadEspecificaId}
  constructor(public http: HttpClient) {
    console.log('Hello IteratorProvider Provider');
  }


  enviarHabilidades(datos){
    console.log(datos);
    return new Promise(resolve => {
      this.http.post(this.apiUrlHabilidades+'/users',datos)
         .subscribe(data => {
           resolve(this.servicioAsignado);
          }, err => {
            console.log(err);
          });
     });


  }


  getHabilidades() {
    return new Promise(resolve => {
      this.http.get(this.apiUrlHabilidades+'/users').subscribe(data => {
        resolve(this.jsonHabilidades);
      }, err => {
        console.log(err);
      });
    });
  }




  jsonHabilidades=[
    {
        "Id": 1,
        "Nombre": "Carpintería",
        "Descripcion": "Ejemplo de servicio de carpintería",
        "HabilidadesEspecificas":  [
          {
              "Id": 1,
              "Nombre": "Madera de pino",
              "Descripcion": "Manejo de maderas de pino",
              "HabilidadId": 1,
              "PrestadoresServicio": null,
              "FechaCreacion": "2019-07-25T21:44:13.133",
              "FechaMoficiacion": "2019-07-25T21:44:13.133"
          },
          {
              "Id": 3,
              "Nombre": "Madera de roble",
              "Descripcion": "Manejo de maderas de roble",
              "HabilidadId": 1,
              "PrestadoresServicio": null,
              "FechaCreacion": "2019-07-25T21:44:42.783",
              "FechaMoficiacion": "2019-07-25T21:44:42.783"
          },
          {
              "Id": 4,
              "Nombre": "Manejo de madera",
              "Descripcion": "Manejo de maderas",
              "HabilidadId": 1,
              "PrestadoresServicio": null,
              "FechaCreacion": "2019-07-25T21:45:02.28",
              "FechaMoficiacion": "2019-07-25T21:45:02.28"
          },
          {
              "Id": 5,
              "Nombre": "Pintura sobre madera",
              "Descripcion": "trabajos realizados sobre madera",
              "HabilidadId": 1,
              "PrestadoresServicio": null,
              "FechaCreacion": "2019-07-25T21:45:25.303",
              "FechaMoficiacion": "2019-07-25T21:45:25.303"
          }
      ],
        "FechaCreacion": "2019-07-24T15:35:51.803",
        "FechaMoficiacion": "2019-07-24T15:35:51.803"
    },
    {
        "Id": 2,
        "Nombre": "Plomeria",
        "Descripcion": "Ejemplo de servicio de plomeria",
        "HabilidadesEspecificas": [
          {
              "Id": 1,
              "Nombre": "Destapar caños",
              "Descripcion": "Manejo de maderas de roble",
              "HabilidadId": 2,
              "PrestadoresServicio": null,
              "FechaCreacion": "2019-07-25T21:44:27.787",
              "FechaMoficiacion": "2019-07-25T21:44:27.787"
          }
      ],
        "FechaCreacion": "2019-07-24T15:36:06.83",
        "FechaMoficiacion": "2019-07-24T15:36:06.83"
    },
    {
        "Id": 3,
        "Nombre": "Lavar ropa",
        "Descripcion": "Ejemplo de servicio de lavar ropa",
        "HabilidadesEspecificas": null,
        "FechaCreacion": "2019-07-24T15:36:23.343",
        "FechaMoficiacion": "2019-07-24T15:36:23.343"
    },
    {
        "Id": 4,
        "Nombre": "Instalaciones",
        "Descripcion": "Ejemplo de servicio de instalaciones",
        "HabilidadesEspecificas": null,
        "FechaCreacion": "2019-07-24T15:36:48.26",
        "FechaMoficiacion": "2019-07-24T15:36:48.26"
    },
    {
        "Id": 5,
        "Nombre": "Electricidad",
        "Descripcion": "Ejemplo de servicio de electricidad",
        "HabilidadesEspecificas": null,
        "FechaCreacion": "2019-07-24T15:36:57.11",
        "FechaMoficiacion": "2019-07-24T15:36:57.11"
    },
    {
        "Id": 6,
        "Nombre": "Cerrajería",
        "Descripcion": "Ejemplo de servicio de cerrajería",
        "HabilidadesEspecificas": null,
        "FechaCreacion": "2019-07-24T15:37:11.84",
        "FechaMoficiacion": "2019-07-24T15:37:11.84"
    }
];


servicioAsignado = {
  "Id": 18,
  "Descripcion": "arreglar mesa de noche",
  "HoraServicio": "2019-08-20T17:00:00-05:00",
  "HorasEstimadas": 1,
  "FechaServicio": "2019-08-21T00:00:00",
  "DireccionServicio": "Malhabar car",
  "PrecioMinimo": 15000.0,
  "PrecioMaximo": 50000.0,
  "PSPersonal": false,
  "Finalizado": false,
  "ClienteId": 88,
  "Cliente": {
    "Puntos": 0,
    "Servicios": [],
    "Id": 88,
    "Nombres": "Hector",
    "Apellidos": "Perez Penia",
    "Cedula": "230984823",
    "Direccion": "carrera 78",
    "Telefono": "911911321",
    "FechaNacimiento": "1974-07-26T00:00:00",
    "Cuenta": null,
    "FechaCreacion": "2019-05-07T02:00:12",
    "FechaModificacion": "2019-02-27T05:50:00"
  },
  "PSHabilidadEspecificaId": 15,
  "PSHabilidadEspecifica": {
    "Id": 15,
    "PrecioHora": 30000.00,
    "AniosExperiencia": 2,
    "PrestadorServicioId": 85,
    "PrestadorServicio": {
      "Habilidades": [],
      "FechaAfiliacion": "2017-07-26T00:00:00",
      "Id": 85,
      "Nombres": "Jose",
      "Apellidos": "Montoya",
      "Cedula": "43985039",
      "Direccion": "carrera 78",
      "Telefono": "911911321",
      "FechaNacimiento": "1985-07-26T00:00:00",
      "Cuenta": null,
      "FechaCreacion": "2019-05-07T02:00:12",
      "FechaModificacion": "2019-02-27T05:50:00"
    },
    "HabilidadEspecificaId": 25,
    "HabilidadEspecifica": {
      "Id": 25,
      "Nombre": "Carpinteria artesanal",
      "Descripcion": "Esculturas y disenios tradicionales sobre madera",
      "HabilidadId": 15,
      "Habilidad": null,
      "PrestadoresServicio": [],
      "FechaCreacion": "2019-05-07T02:00:12",
      "FechaModificacion": "2019-02-27T05:50:00"
    },
    "Servicios": [],
    "FechaCreacion": "2019-05-07T02:00:12",
    "FechaModificacion": "2019-02-27T05:50:00"
  },
  "Pagos": null,
  "Calificacion": null,
  "FechaCreacion": "2019-08-20T00:06:20.8883779-05:00",
  "FechaModificacion": "2019-08-20T00:06:20.8883779-05:00"
};








}
