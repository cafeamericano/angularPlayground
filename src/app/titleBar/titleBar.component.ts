import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'titleBar',
	templateUrl: './titleBar.component.html',
	styleUrls: ['./titleBar.component.css'],
})

export class TitleBarComponent implements OnInit {

	constructor(private http: HttpClient) {
		this.ngOnInit();
	}

  	ngOnInit = () => {
		return;
  	}

}