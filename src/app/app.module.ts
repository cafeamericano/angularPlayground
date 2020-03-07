import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicBlockComponent } from './dynamicBlock/dynamicBlock.component';
import { TableRowComponent } from './tableRow/tableRow.component';
import { TitleBarComponent } from './titleBar/titleBar.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicBlockComponent,
    TableRowComponent,
    TitleBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '', 
        component: DynamicBlockComponent 
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
