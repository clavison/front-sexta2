import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosURL = environment.url+'/produtos';

  constructor(private http: HttpClient) { }

  adicionar(produto: Produto): Promise<any>{
    return this.http.post(this.produtosURL, produto)
    .toPromise();
  }
}
