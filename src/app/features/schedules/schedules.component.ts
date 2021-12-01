import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';  
import { ScheduleService } from 'src/app/core/Services/schedule.service'
import countries from 'src/app/_files/country.json'
import locations from 'src/app/_files/location.json'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit 
{
  public columnDefs : ColDef[] | undefined; 
  public countryList:{name:string, code:string}[] = countries;
  public locationList:{name:string, countryCode:string, unCode:string}[]= locations;
  public showLocationDropdown : boolean | undefined;
  public showGridData : boolean | undefined;
  public countrycode : string = "IN";
  public locationcode : string = "SG";
  public iflag : boolean | undefined; 
  rowData: Observable<any[]> | undefined;

  GetAgColumns() {  
    this.columnDefs = [
      { headerName: "Id" ,field: 'id', sortable: true, filter: true, checkboxSelection: true},
      { headerName: "Vessel", field: 'vessel.name',sortable: true, filter: true},
       { headerName: "Voyage Number", field: 'voyageNumber',sortable: true, filter: true},
      { headerName: "Product Type", field: 'productType',sortable: true, filter: true},
      { headerName: "CutOff", field: 'cutOff',sortable: true, filter: true},
      { headerName: "Departure (Date)", field: 'etd',sortable: true, filter: true},
      { headerName: "Arrival (Date)",field: 'eta',sortable: true, filter: true},
      { headerName: "Carrier",field: 'carrier.name',sortable: true, filter: true },
      { headerName: "Reciept Place",field: 'placeOfReceipt.name',sortable: true, filter: true },
      { headerName: "Hub Country",field: 'hub.name',sortable: true, filter: true},
      { headerName: "Location Country",field: 'portOfLoading.name',sortable: true, filter: true},
      { headerName: "Transit Time (Port)",field: 'transitTimePortToPort',sortable: true, filter: true},
      { headerName: "Transit Time (Cut Off Port)",field: 'transitTimeCutOffToPort',sortable: true, filter: true},
    ];
  }
  GetAgRows()
  {
    alert(this.countrycode);
    alert(this.locationcode);
    
    this.rowData = this.http.get<any[]>('https://apitest.ecuworldwide.com/schedules?from=' + this.countrycode + '&to=' + this.locationcode);
   // this.rowData = this.http.get<any[]>('https://apitest.ecuworldwide.com/schedules?from=' + 'IN' + '&to=' + 'SG');

   // console.log(this.rowData);
   
  }
    
  constructor(private dataService: ScheduleService, private http: HttpClient, public fb: FormBuilder) {
     this.locationList = this.locationList.filter(e=>e.countryCode == this.countrycode);
  }

    ngOnInit(): void {
      if(!this.iflag)
      {
        //this.locationcode = this.locationList.filter(e=>e.countryCode == this.countrycode)[0].unCode;
        this.showGridData = true;
        this.GetAgColumns();
        this.GetAgRows();
      }
      else{
        this.showGridData = true;
        this.GetAgColumns();
        this.GetAgRows();
        //alert("onInit - CountryCode : " + this.countrycode  + " StateCode : " + this.locationcode);
      }
    }

    onSelectCountry(con : any)
    { 
      this.countrycode = con.target.value;
      this.locationList = locations;
      this.locationList = this.locationList.filter(e=>e.countryCode == this.countrycode);
      this.showLocationDropdown = true;
    } 
    onSelectLocation(loc : any)
    { 
      this.locationcode = loc.target.value;
    } 
    oppoSuitsForm = this.fb.group({
      name: ['']
    })
    onSubmit() {

      if(this.locationcode != undefined)
      this.iflag = true;

      this.ngOnInit();
    }
 }

