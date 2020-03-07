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

		var cityNamesArray;
		var cityDataArray = [];

		this.http.get(`http://localhost:9483/WeatherBuddy/api/savedCitiesGetAll`).subscribe(data => {
			
			cityNamesArray = data;
			
			cityNamesArray.forEach(city => {
				this.http.get(`http://localhost:9483/WeatherBuddy/api/${city}`).subscribe(data => {
					cityDataArray.push(data)
				})
			})

		})

		this.cityWeatherArray = cityDataArray;
		return;
  }

}