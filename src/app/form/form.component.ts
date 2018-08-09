import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NestoriaService } from '../shared/sevices/nestoria.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  search = new FormControl('');

  constructor(private http: NestoriaService) {
  }

  ngOnInit() {
    this.search.valueChanges
      .pipe(switchMap(value => this.http.getData(value)), debounceTime(500), distinctUntilChanged())
      .subscribe(res => this.http.dataSource.next(res.response.listings));
  }
}
