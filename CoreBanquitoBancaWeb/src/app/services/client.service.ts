import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ClientServices {
  
  private getClientAccount = "";
  private crearClienteEmpresaApi = "";    
  private buscarClienteApi = "";            
  private actualizarClientePersonaApi =  "";
  private clienteByIdApi =  "";            


  constructor(private http: HttpClient) { }

  

}
