import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NestoriaService } from '../shared/sevices/nestoria.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  search: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nestoria: NestoriaService) {
  }

  ngOnInit() {
    this.search = this.fb.group({
      search: ['brighton']
    });
  }

  searchHouse(value) {
    this.nestoria.getData(value);
  }
}
