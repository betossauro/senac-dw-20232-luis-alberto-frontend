import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fabricante } from '../model/fabricante';

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private readonly API = 'http://localhost:8080/api/fabricantes';

  constructor(private httpClient: HttpClient) { }

  // Declarar os métodos da API REST
  //TODO

  listarTodos(): Observable<Array<Fabricante>> {
    return this.httpClient.get<Array<Fabricante>>(this.API + '/todos');
  }
}
