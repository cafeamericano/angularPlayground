import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tableRow',
  templateUrl: './tableRow.component.html',
  styleUrls: ['./tableRow.component.css']
})

export class TableRowComponent implements OnInit {

  @Input() createdApp:object;

  constructor(private http: HttpClient) {
    this.ngOnInit();
   }

  ngOnInit = () => {
    console.log(this.createdApp)
    // console.log('initialized row component')
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/