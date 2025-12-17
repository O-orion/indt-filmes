import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroments } from '../../../environments/environment';
import { FilmeResponse } from '../models/Filme';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private http = inject(HttpClient);
  private API_URL = enviroments.api_url;
  private API_KEY = enviroments.api_key;

  getPopularFilmes() {
    return this.http.get<FilmeResponse>(`${this.API_URL}/movie/popular?api_key=${this.API_KEY}&language=pt-BR`)
  }
}
