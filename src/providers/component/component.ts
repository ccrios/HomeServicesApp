import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IteratorProvider } from '../iterator/iterator';


/*
  Generated class for the ComponentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComponentProvider {

  habilidades:any;
  constructor(
    public http: HttpClient,
    public iterator: IteratorProvider
    ) 
    {
    console.log('Hello ComponentProvider Provider');
    }




    enviarHabilidades(habilidadEspecificaId,
      Descripcion,HoraServicio,HorasEstimadas,
      FechaServicio,DireccionServicio,PrecioMinimo,PrecioMaximo,PSPersonal,ClienteId){
      

      var datos={
        "habilidadEspecificaId": habilidadEspecificaId,
        "Descripcion": Descripcion,
        "HoraServicio": HoraServicio,
        "HorasEstimadas": HorasEstimadas,
        "FechaServicio": FechaServicio,
        "DireccionServicio": DireccionServicio,
        "PrecioMinimo": PrecioMinimo,
        "PrecioMaximo": PrecioMaximo,
        "PSPersonal": PSPersonal,
        "ClienteId": ClienteId
      };

      alert(datos);

      return new Promise(resolve => {
        this.iterator.enviarHabilidades(datos).then(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  
  
    }

    
    getHabilidades() {

        return new Promise(resolve => {
          this.iterator.getHabilidades().then(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
  
       
    }

    

}
