import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  @ViewChild('menu') menu: any
  @ViewChild('background') background: any
  @ViewChild('hamburguer') hamburguer: any

  infoAuthentication: any = []

  notes = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl('', Validators.required)
  })
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {

    if(localStorage.getItem('userInfo')) {

      const jsonUser = JSON.parse(localStorage.getItem('userInfo')!)
  
      this.infoAuthentication = {
        userName: jsonUser.userName,
        userEmail: jsonUser.userEmail,
        imageUser: jsonUser.imageUser
      }
      
    } else {
      
      this.router.navigate([''])

    }
    
  }

  openMenu() {
    this.menu.nativeElement.classList.toggle('open')
    this.background.nativeElement.classList.toggle('background-active')
    this.hamburguer.nativeElement.classList.toggle('hamburguer-open')
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }

  onSubmit() {
    console.log(this.notes.value)
  }

}
