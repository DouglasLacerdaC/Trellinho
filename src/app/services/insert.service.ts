import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InsertService {

  nameUser: any
  imageUser: any
  userEmail: any
  
  constructor(private angularFirestore: AngularFirestore) { }
  
  insert(content: string, title: string) {
    
    const jsonUser = JSON.parse(localStorage.getItem('userInfo')!)
  
    this.nameUser = jsonUser.userName
    this.imageUser = jsonUser.imageUser
    this.userEmail = jsonUser.userEmail

    this.angularFirestore.collection(`${this.userEmail}`).add({
      imageUser: this.imageUser,
      nameUser: this.nameUser,
      content: content,
      title: title,
      date: '12/04/2021',
      type: 'cuscuz'
    })    

  }

  returnData(): Observable<any> {

    const jsonUser = JSON.parse(localStorage.getItem('userInfo')!)
    this.userEmail = jsonUser.userEmail

    return this.angularFirestore.collection(`${this.userEmail}`).valueChanges()
    
  }

}
