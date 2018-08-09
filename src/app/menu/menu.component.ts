import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../core/localstorage/localstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private _local: LocalstorageService) {
  }

  isLogin() {
    return !this._local.isUserLogin();
  }
}
