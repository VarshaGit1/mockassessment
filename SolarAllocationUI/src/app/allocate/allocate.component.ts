import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AllocateServiceService } from './allocate-service.service';

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {
  allocateForm: FormGroup;
  errorMessage: string;
 successMessage: string; 

  constructor(fb:FormBuilder) {
    this.allocateForm=fb.group({
      distributorname:new FormControl('',Validators.compose([Validators.required])),
      purchasedate:new FormControl('',Validators.compose([Validators.required])),
      installdate:new FormControl('',Validators.compose([Validators.required])),
      customerid:new FormControl('',Validators.compose([Validators.required]))
  
    }) 
  }

  

  ngOnInit() {
  }

  register() {
    
    this.allocateForm.reset();
  }

}
