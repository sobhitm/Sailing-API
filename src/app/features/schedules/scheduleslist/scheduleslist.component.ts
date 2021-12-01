import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
//import { ScheduleService } from 'src/app/core/Services/schedule.service'
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-scheduleslist',
  templateUrl: './scheduleslist.component.html',
  styleUrls: ['./scheduleslist.component.scss']
})
export class ScheduleslistComponent implements OnInit{
   @Input() restAPIURL : any;  
  //@Output() deleteItem = new EventEmitter<string>(); 
  
  columnDefs: ColDef[] = [
    { field: 'code', headerName: "Code Value", sortable: true, filter: true, checkboxSelection: true},
    { field: 'name',sortable: true, filter: true},
    //{ field: 'isdCode',sortable: true, filter: true}
  ];
 
  rowData: Observable<any[]> | undefined;
  rowLocData: Observable<any[]> | undefined;


  constructor(private http: HttpClient) {
   }
  ngOnInit() { 
     this.rowData = this.http.get<any[]>('https://apitest.ecuworldwide.com/codes/countries?code=AF');
     this.rowLocData = this.http.get<any[]>('https://apitest.ecuworldwide.com/codes/locations');
   }   
}

