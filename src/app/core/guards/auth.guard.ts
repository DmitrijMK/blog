import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _local: LocalstorageService, private router: Router) {
  }

  canActivate(): boolean {
    if (!this._local.isUserLogin()) {
      this.router.navigate(['/core/login']);
      return true;
    }
    return true;
  }
}
