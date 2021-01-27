import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/environments/endpoints';
import { ColorResponse, Resource } from '../models/colors.model';
import { LoginRequest, LoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(Endpoints.login + "", data);
  }

  getAll(): Observable<Resource> {
    return this.http.get<Resource>(Endpoints.getAll);
  }

  getById(id: number): Observable<ColorResponse> {
    return this.http.get<ColorResponse>(`${Endpoints.getAll}/${id}`);
  }
}
