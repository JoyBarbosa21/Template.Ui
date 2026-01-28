import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { AuthApiService } from "../../../core/auth/auth-api.service";
import { LoginDTO } from "../../../shared/models/login.dto";
import { TokenService } from "../../../core/auth/token.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private readonly authApi: AuthApiService,
    private tokenService: TokenService,
    private readonly router: Router
  ) {}

  login(dto: LoginDTO): Observable<void> {
    return this.authApi.login(dto).pipe(
      tap(res => this.tokenService.set(res.token)),
      tap(() => this.router.navigateByUrl('/dashboard')),
      map(() => void 0)
    );
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.token;
  }

   logout(): void {
    this.tokenService.clear();
    this.router.navigateByUrl('/login');
  }
}