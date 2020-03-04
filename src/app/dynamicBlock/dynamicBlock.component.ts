import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamicBlock',
  templateUrl: './dynamicBlock.component.html',
  styleUrls: ['./dynamicBlock.component.css'],
})

export class DynamicBlockComponent implements OnInit {

  createdApps: object;

  constructor(private http: HttpClient) {
    this.ngOnInit();
   }

  ngOnInit = () => {
    return this.http.get('https://mfarmer5102-grandcentralapi.herokuapp.com/AppGalleryLite/api/applications').subscribe(data => {
        this.createdApps = data;
    })
  }

}