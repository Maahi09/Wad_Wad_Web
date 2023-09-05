import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private httpClient:HttpClient) { }
  //method for getting total-reports
  // getReports(){
  //   return this.httpClient.get('')
  // }
}
