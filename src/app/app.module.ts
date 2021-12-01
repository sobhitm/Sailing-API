import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SchedulesComponent } from './features/schedules/schedules.component';
import { ScheduleslistComponent } from './features/schedules/scheduleslist/scheduleslist.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
   // routingComponents,

   SchedulesComponent,
  ScheduleslistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    AgGridModule.withComponents([])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
