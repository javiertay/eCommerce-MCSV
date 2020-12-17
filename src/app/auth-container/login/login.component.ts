import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/customer.service';
import { AuthContainerComponent } from '../auth-container.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AuthContainerComponent>,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(user){
    this.customerService.loginUser(user).subscribe(
      (res:any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', user.username);
        console.log("login successful");
        location.reload();
      },
      err=>{
        if (err.status == 400){
          alert("username n pw no match");
        }else{
          console.log('error: ', err);
        }
      }
    );
  }

  
}
