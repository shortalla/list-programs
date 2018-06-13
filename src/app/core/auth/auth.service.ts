import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

/**
 * Service for providing the token for authentication
 */
@Injectable()
export class AuthService {
  private _token: string;

  get token(): string {
    return this._token;
  }

  constructor() {
    this._token = environment.accessToken;
  }
}