import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { SolarHeater } from '../shared/SolarHeater';


@Injectable()
export class AllocateServiceService {

  constructor() { }
  
  allocateUrl: string = '';
   
  
  getData(data:any) : Observable<any> {
    return;
  }
}
