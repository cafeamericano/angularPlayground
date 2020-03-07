import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tableRow',
  templateUrl: './tableRow.component.html',
  styleUrls: ['./tableRow.component.css']
})

export class TableRowComponent implements OnInit {
  
  @Input() cityWeatherObj: any;

  constructor(private http: HttpClient) {
    this.ngOnInit();
   }

  ngOnInit = () => {
  }

}