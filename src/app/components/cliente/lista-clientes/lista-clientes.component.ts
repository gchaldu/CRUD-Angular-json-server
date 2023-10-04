
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { clientesI } from 'src/app/interfaces/clientei';
import { ClienteService } from 'src/app/services/cliente.service';




@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  listaClientes:clientesI[]=[];

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
    this.mostrarClientes()
  }

  async mostrarClientes(){
    this.listaClientes = await this.clienteService.getClientes()
    /* this.listaClientes.forEach(item=>console.log(item.nombre)) */
  }

  async eliminarCliente(id: number){
    if(confirm(`Desea eliminar el cliente con id ${id} ?`)){
      this.clienteService.deleteCliente(id)
    }
  }

}
