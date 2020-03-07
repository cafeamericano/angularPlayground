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

		var rootUrl = 'https://mfarmer5102-grandcentralapi.herokuapp.com'
		// var rootUrl = 'http://localhost:9483'

		this.http.get(rootUrl + `/WeatherBuddy/api/savedCitiesGetAll`).subscribe(data => {
			
			cityNamesArray = data;
			
			cityNamesArray.forEach(city => {
				this.http.get(rootUrl + `/WeatherBuddy/api/${city}`).subscribe(data => {
					cityDataArray.push(data)
				})
			})

		})

		this.cityWeatherArray = cityDataArray;
		return;
  }

}