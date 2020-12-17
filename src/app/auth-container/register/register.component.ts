import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthContainerComponent } from '../auth-container.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  payload = [];
  
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AuthContainerComponent>, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.firstFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      cfmPassword: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      contact: ['', Validators.required]
    });

  }

  onRegisterUser(){
    this.payload = {...this.firstFormGroup.value,...this.secondFormGroup.value};
    if(this.payload['password'] != this.payload['cfmPassword']){
      alert("Passwords does not match");
    }else{
      delete this.payload["cfmPassword"];
      this.customerService.registerUser(this.payload).subscribe(
        (res:any) => {
          this.dialogRef.close();
        },
        err => {
          if (err.status == 400){
            alert('Username already exists. Please try another.');
          }
        }
      )
    }
    
  }
}
