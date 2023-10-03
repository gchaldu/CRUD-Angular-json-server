
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  listaClientes:any[]=[];

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void {
    this.mostrarClientes()
  }

  async mostrarClientes(){
    this.listaClientes = await this.clienteService.getClientes()
    console.log(this.listaClientes)
  }

}
