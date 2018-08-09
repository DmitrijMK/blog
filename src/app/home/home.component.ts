import { Component, OnInit } from '@angular/core';
import { NestoriaService } from '../shared/sevices/nestoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource;

  constructor(private http: NestoriaService) {}

  ngOnInit() {
    this.http.dataSource.subscribe(data => this.dataSource = data);
  }
}
