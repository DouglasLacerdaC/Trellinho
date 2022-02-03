import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  infoAuthentication: any = []
  
  constructor(private authentication: AuthService) { }
  
  ngOnInit(): void {
    
    const jsonUser = JSON.parse(localStorage.getItem('userInfo')!)

    this.infoAuthentication = {
      userName: jsonUser.userName,
      userEmail: jsonUser.userEmail,
      imageUser: jsonUser.imageUser
    }

  }

}
