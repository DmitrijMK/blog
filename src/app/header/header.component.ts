import { Component } from '@angular/core';
import { LocalstorageService } from '../core/localstorage/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _local: LocalstorageService,
              private _route: Router) {
  }

  logOut() {
    this._local.setRegitrationData({'isLogin': false});
    this._route.navigate(['/core/login']);
  }
}
