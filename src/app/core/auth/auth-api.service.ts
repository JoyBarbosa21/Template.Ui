import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { delay, Observable, of } from "rxjs";
import { LoginDTO } from "../../shared/models/login.dto";
import { AuthResponse } from "../../shared/models/auth-response";

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private api: ApiService) {}

  login(data: LoginDTO): Observable<AuthResponse> {
    // 🔴 SIMULA BACKEND .NET
    return of({
      token: 'fake-jwt-token',
      email: data.email
    }).pipe(delay(1000));

    // 🔵 API REAL (quando existir)
    // return this.api.post<AuthResponse>('/auth/login', data);
  }
}