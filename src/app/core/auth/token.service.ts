import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class TokenService {

  private static readonly TOKEN_KEY = 'token';

  get token(): string | null {
    return localStorage.getItem(TokenService.TOKEN_KEY);
  }

  set(token: string): void {
    localStorage.setItem(TokenService.TOKEN_KEY, token);
  }

  clear(): void {
    localStorage.removeItem(TokenService.TOKEN_KEY);
  }
}