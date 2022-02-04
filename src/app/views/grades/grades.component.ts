import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  @ViewChild('menu') menu: any

  infoAuthentication: any = []
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    
    const jsonUser = JSON.parse(localStorage.getItem('userInfo')!)

    this.infoAuthentication = {
      userName: jsonUser.userName,
      userEmail: jsonUser.userEmail,
      imageUser: jsonUser.imageUser
    }

  }

  openMenu() {
    this.menu.nativeElement.classList.toggle('open')
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }

}
