import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthContainerComponent } from 'src/app/auth-container/auth-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidenavEnable = false;
  loggedIn = localStorage.getItem("token");

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  enableSidenav() {
    this.sidenavEnable = !this.sidenavEnable;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(AuthContainerComponent, {
    });

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
