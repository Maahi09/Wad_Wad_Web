import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
public userId = new BehaviorSubject<number>(0)
public isOwnerCall = false
public bindUserDetails = new BehaviorSubject<boolean>(true)
public disableUserJobDetails = false
public petDetails = new BehaviorSubject({})
public petDetailsId = new BehaviorSubject(0)
public ownerActive =  false
public walkerActive = false
public isActive:boolean = true
public searchData = new BehaviorSubject({})
constructor() { }
}
