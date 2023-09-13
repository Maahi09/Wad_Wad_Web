import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public headerTitle:string='Dashboard';
  public headerListTitle:string='Owner';
  public titleDashboard:boolean = false;
  public toggleTitle:boolean =false
  constructor() { }
  public binddata =  new BehaviorSubject<boolean>(true)
}
