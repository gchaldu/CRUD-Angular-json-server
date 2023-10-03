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
      console.log(error);
    }
  }

  async deleteCliente(id:number){
    try {
      await fetch(`${this.url}/${id}`,
                  {method:'DELETE'}
      )
      window.location.href = 'index.html'
    } catch (error) {
      alert(error)
    }
  }

  async postCliente(cliente:any){
    try {
      await fetch(this.url,
                  {method:'POST', body: JSON.stringify(cliente), headers: {'Content-type':'application/json'}}
        )
        window.location.href='index.html'
    } catch (error) {
      console.log(error)
    }
  }
}
