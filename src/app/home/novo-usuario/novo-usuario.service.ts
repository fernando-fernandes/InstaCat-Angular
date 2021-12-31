import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { environment } from 'src/environments/environment'

const API = environment.apiURL
const APIproxy = environment.apiProxy

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor( private http: HttpClient ) { }

  cadastraNovoUsuario( novoUsuario: NovoUsuario ) {
    return this.http.post(`${APIproxy}/api/user/signup`, novoUsuario)
  }

  verificaUsuarioExistente( nomeUsuario:string ) {
    return this.http.get(`${APIproxy}/api/user/exists/${nomeUsuario}`)
  }

}
