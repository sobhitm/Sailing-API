import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  //private REST_API_SERVER = "https://reqres.in/api/users?page=1";

  private countryApi = "https://apitest.ecuworldwide.com/codes/countries";
  private locationApi = "https://apitest.ecuworldwide.com/codes/locations";



  constructor(private httpClient: HttpClient) { }

  public GetCountry(){
    return this.httpClient.get<any[]>(this.countryApi);
  }

  public GetLocation(){
    return this.httpClient.get<any>(this.locationApi);
  }

}
