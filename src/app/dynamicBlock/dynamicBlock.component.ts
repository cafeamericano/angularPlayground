import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableRowComponent } from '../tableRow/tableRow.component';

@Component({
  selector: 'dynamicBlock',
  templateUrl: './dynamicBlock.component.html',
  styleUrls: ['./dynamicBlock.component.css'],
})

export class DynamicBlockComponent implements OnInit {

  createdApps:object;

  constructor(private http: HttpClient) {
    this.ngOnInit();
   }

  ngOnInit = () => {
    return this.http.get('http://localhost:9483/AppGalleryLite/api/applications').subscribe(data => {
        this.createdApps = data;
    })
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/