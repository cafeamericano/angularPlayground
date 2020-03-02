import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dynamicBlock',
  templateUrl: './dynamicBlock.component.html',
  styleUrls: ['./dynamicBlock.component.css']
})
export class DynamicBlockComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:9483/AppGalleryLite/api/applications').subscribe(data => {
      console.log(data)
  })
   }

  ngOnInit = () => {
    this.http.get<any>('http://localhost:9483/AppGalleryLite/api/applications').subscribe(data => {
        console.log(data)
    })
    // this.pullFromApi();
  }

  pullFromApi = () => {
    // return this.http.get<Config>('http://localhost:9483/AppGalleryLite/api/applications')
    // fetch(
    //   'http://localhost:9483/AppGalleryLite/api/applications',
    //   {mode: "cors"}
    // ).then(response => {
    //   console.log(response)
    // })
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/