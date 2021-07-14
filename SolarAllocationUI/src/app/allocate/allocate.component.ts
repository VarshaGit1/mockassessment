import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SolarHeater } from '../shared/SolarHeater';
import { AllocateServiceService } from './allocate-service.service';

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {
  allocateForm: FormGroup;
  errorMessage: string="Error";
 successMessage: string="Success"; 

  constructor(private fb:FormBuilder,private allocateServiceService:AllocateServiceService) {
    this.allocateForm=fb.group({
      distributorname:new FormControl('',Validators.compose([Validators.required])),
      purchasedate:new FormControl('',Validators.compose([Validators.required])),
      installdate:new FormControl('',Validators.compose([Validators.required])),
      customerid:new FormControl('',Validators.compose([Validators.required]))
  
    }) 
  }

  
  
  ngOnInit() {
  }

  register()
  {
    this.allocateServiceService.getData(this.allocateForm).subscribe(
      (success)=>{alert(this.successMessage);},
      (error)=>{alert(this.errorMessage);}
    ); 
  }

}
