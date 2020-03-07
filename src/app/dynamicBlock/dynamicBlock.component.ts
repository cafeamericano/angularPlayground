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
		var cities = ['Raleigh', 'Durham', 'Charlotte'];
		var citiesArray = [];
		cities.forEach(city => {
			this.http.get(`http://localhost:9483/WeatherBuddy/api/${city}`).subscribe(data => {
				citiesArray.push(data)
			})
		})

		this.cityWeatherArray = citiesArray;
		return;
  }

}