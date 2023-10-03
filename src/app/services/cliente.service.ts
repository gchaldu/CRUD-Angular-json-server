import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = 'http://localhost:4000/clientes';

  constructor() { }

  async getClientes(){
    try {
      const resultado = await fetch(this.url);
      const clientes = await resultado.json();
      return clientes;
    } catch (error) {
      alert(error);
    }
  }
}
