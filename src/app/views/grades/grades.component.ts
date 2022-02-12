import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/services/insert.service';

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

  returnNotes: any
  
  constructor(private router: Router,
              private insert: InsertService) { }
  
  ngOnInit(): void {
    
    this.insert.returnData().subscribe(
      data => {
        this.returnNotes = data
      }
    )

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
    
    this.insert.insert(this.notes.value.description, this.notes.value.title)

    this.notes.reset()

    this.insert.returnData().subscribe(
      data => {
        this.returnNotes = data
      }
    )

  }

}
