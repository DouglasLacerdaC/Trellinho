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
    
    this.infoAuthentication = {
      userName: this.authentication.infoAuthentication.userName,
      userEmail: '',
      imageUser: ''
  
    }

  }

}
