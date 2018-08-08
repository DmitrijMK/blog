import { Component, OnInit } from '@angular/core';
import { NestoriaService } from '../shared/sevices/nestoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public datas;

  constructor(private http: NestoriaService) {
  }

  ngOnInit() {
    this.searchHouse('brighton');
  }

  searchHouse(value) {
    this.datas = this.http.getData(value).subscribe(data => {
      this.datas = data.response.listings;
      console.log(this.datas);
    });
  }
}
