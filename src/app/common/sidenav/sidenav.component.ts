import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthContainerComponent } from 'src/app/auth-container/auth-container.component';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  loggedIn = localStorage.getItem("token");
  userInfo=[];

  @Output()
  sidenav = new EventEmitter();

  profileMenu = [
    {
      title: 'My Profile',
      link: '/myprofile/profile',
      icon: 'person'
    },
    {
      title: 'My Orders',
      link: '/myprofile/orders',
      icon: 'next_week'
    },
    {
      title: 'My Cart',
      link: '/shopping-cart',
      icon: 'add_shopping_cart'
    },
    {
      title: 'My Wishlist',
      link: '/myprofile/wishlist',
      icon:'shopping_cart'
    },
   
  ];

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }
  constructor(public dialog: MatDialog, private router: Router, private customerService: CustomerService) {

  }

  ngOnInit() {
    this.customerService.getUserProfile(localStorage.getItem("username")).subscribe(
      (res:any) => {
        this.userInfo = res;
        console.log(this.userInfo);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  openLoginDialog(): void {
    this.toggelSidenav();
    const dialogRef = this.dialog.open(AuthContainerComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    location.reload();
  }
}
