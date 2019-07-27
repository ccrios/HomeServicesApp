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


  enviarHabilidades(datos,){
    alert("enviando");
    return new Promise(resolve => {
      this.http.post(this.apiUrlEnviarSolicitud+"/api/Servicios?habilidadEspecificaId="+datos.habilidadEspecificaId,datos)
         .subscribe(data => {
           resolve(data);
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




}
