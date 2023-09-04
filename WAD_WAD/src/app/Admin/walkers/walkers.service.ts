import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalkersService {
  public totalWalkersData = new BehaviorSubject([])
  public walkerDetails = new BehaviorSubject({})
  public totalJobDetails = new BehaviorSubject({})
  public jobId = new BehaviorSubject(0)
  constructor(private httpClient:HttpClient) { }
 
//method for getting total-walkers
  getWalkers(){
    return this.httpClient.get('UserData/Walkers')
  }
//method for getting walker-details
getWalkerDetails(walkerId:number){
  return this.httpClient.get(`UserData/WalkerDetails/${walkerId}`)
}
//method to get job-details
getJobDetails(){
  return this.httpClient.get(`UserData/JobDetails`)
}
//method to get walking with pet details
getWalkWithPet(jobId:number){
  return this.httpClient.get(`UserData/WalkWithPet/${jobId}`)
}
}
