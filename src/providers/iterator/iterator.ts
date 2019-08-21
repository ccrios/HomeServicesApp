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
  apiUrlEnviarSolicitud = 'https://jsonplaceholder.typicode.com';
  apiUrlServicios = 'https://jsonplaceholder.typicode.com';
  servicioAsignado;
  jsonHabilidades;
  jsonServicios;
  //localhost/api/Servicios?habilidadEspecificaId={habilidadEspecificaId}
  constructor(public http: HttpClient) {
    // console.log('Hello IteratorProvider Provider');
    this.initJSON();
  }

  enviarHabilidades(datos) {
    // console.log(datos);
    return new Promise(resolve => {
      this.http.post(this.apiUrlHabilidades + '/users', datos)
        .subscribe(data => {
          resolve(this.servicioAsignado);
        }, err => {
          console.log(err);
        });
    });
  }

  getHabilidades() {
    return new Promise(resolve => {
      this.http.get(this.apiUrlHabilidades + '/users').subscribe(data => {
        resolve(this.jsonHabilidades);
      }, err => {
        console.log(err);
      });
    });
  }

  getServicios() {
    return new Promise(resolve => {
      this.http.get(this.apiUrlServicios + '/users').subscribe(data => {
        resolve(this.jsonServicios);
      }, err => {
        console.log(err);
      });
    });
  }

  initJSON(){
    this.jsonServicios = [
      {
        "Id": 15,
        "Descripcion": "hola",
        "HoraServicio": "1900-01-01T15:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-09-26T00:00:00",
        "DireccionServicio": "malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 60000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-05-07T02:00:12",
        "FechaModificacion": "2019-02-27T05:50:00"
      },
      {
        "Id": 16,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-19T15:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-20T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-19T23:29:05.707",
        "FechaModificacion": "2019-08-19T23:29:05.707"
      },
      {
        "Id": 17,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-19T15:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-20T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-19T23:47:46.097",
        "FechaModificacion": "2019-08-19T23:47:46.097"
      },
      {
        "Id": 18,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T00:06:20.89",
        "FechaModificacion": "2019-08-20T00:06:20.89"
      },
      {
        "Id": 19,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T01:04:23.157",
        "FechaModificacion": "2019-08-20T01:04:23.157"
      },
      {
        "Id": 20,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T01:11:29.86",
        "FechaModificacion": "2019-08-20T01:11:29.86"
      },
      {
        "Id": 21,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T01:13:01.157",
        "FechaModificacion": "2019-08-20T01:13:01.157"
      },
      {
        "Id": 22,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T01:20:55.113",
        "FechaModificacion": "2019-08-20T01:20:55.117"
      },
      {
        "Id": 23,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T01:23:45.197",
        "FechaModificacion": "2019-08-20T01:23:45.197"
      },
      {
        "Id": 24,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T12:42:58.747",
        "FechaModificacion": "2019-08-20T12:42:58.747"
      },
      {
        "Id": 25,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T12:48:52.337",
        "FechaModificacion": "2019-08-20T12:48:52.337"
      },
      {
        "Id": 26,
        "Descripcion": "arreglar mesa de noche",
        "HoraServicio": "2019-08-20T17:00:00",
        "HorasEstimadas": 1,
        "FechaServicio": "2019-08-21T00:00:00",
        "DireccionServicio": "Malhabar car",
        "PrecioMinimo": 15000.00,
        "PrecioMaximo": 50000.00,
        "PSPersonal": false,
        "Finalizado": false,
        "ClienteId": 88,
        "Cliente": null,
        "PSHabilidadEspecificaId": 15,
        "PSHabilidadEspecifica": null,
        "Pagos": null,
        "Calificacion": null,
        "FechaCreacion": "2019-08-20T13:29:58.517",
        "FechaModificacion": "2019-08-20T13:29:58.517"
      }
    ];
  
  
    this.jsonHabilidades = [
      {
        "Id": 1,
        "Nombre": "Carpintería",
        "Descripcion": "Ejemplo de servicio de carpintería",
        "HabilidadesEspecificas": [
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
  
  
    this.servicioAsignado = {
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
  








}
