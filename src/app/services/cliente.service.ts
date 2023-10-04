import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { clientesI } from '../interfaces/clientei';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string = 'http://localhost:4000/clientes';

  constructor(private http: HttpClient) { }

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

  async getCliente(id:number){
    try {
      const resultado = await fetch(`${this.url}/${id}`);
      const cliente = await resultado.json()
      return cliente;
    } catch (error) {
      console.log(error)
    }
  }

  async putCliente(cliente: clientesI | null){
    try {
      await fetch(`${this.url}/${cliente?.id}`,
                  {
                    method:'PUT',
                    body: JSON.stringify(cliente),
                    headers:{'Content-type':'application/json'}
                  }
      )
    } catch (error) {
      console.log(error)
    }


  }
  /* getCliente(id: number): Observable<any> {
    const apiUrl = `${this.url}/${id}`;

    return this.http.get(apiUrl).pipe(
      catchError((error) => {
        console.error('Error al obtener el cliente:', error);
        return throwError(error);
      })
    );
  } */
}
