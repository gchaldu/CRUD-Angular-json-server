import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { clientesI } from 'src/app/interfaces/clientei';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit{

  forms!:FormGroup

  constructor(
              private clienteService: ClienteService,
              private formsBuildes: FormBuilder
              ){}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.forms = this.formsBuildes.group({
        apellido:'',
        nombre:'',
        dni:0,
        fechaInicio:'',
    })
  }

  altaCliente(){
    this.clienteService.postCliente(this.forms.value)
  }

}
