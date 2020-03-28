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

		let rootUrl = "https://central-api-node-2-6wevi67jwa-uc.a.run.app";

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