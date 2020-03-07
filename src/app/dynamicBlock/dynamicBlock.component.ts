import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamicBlock',
  templateUrl: './dynamicBlock.component.html',
  styleUrls: ['./dynamicBlock.component.css'],
})

export class DynamicBlockComponent implements OnInit {

  cityWeatherArray: any;

  constructor(private http: HttpClient) {
    this.ngOnInit();
   }

  ngOnInit = () => {
    return this.http.get('http://localhost:9483/WeatherBuddy/api/Los%20Angeles').subscribe(data => {
        data = [data];
        this.cityWeatherArray = data;
    })
  }

}