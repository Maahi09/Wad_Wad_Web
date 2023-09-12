import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
constructor(private httpClient:HttpClient) { }
public totalOwnersData = new BehaviorSubject([])
public ownerDetails = new BehaviorSubject({})
//method for getting total-owners
getOwners(){
  return this.httpClient.get(`UserData/Owners`)
}
getSearchOwners(value:any){
  return this.httpClient.get(`UserData/Owners?search=${value}`)
}
//method for getting owner-details
getOwnerDetails(ownerId:number){
  return this.httpClient.get(`UserData/OwnerDetails/${ownerId}`)
}
//method for getting pet-details
getPetDetails(){
  
}
}
