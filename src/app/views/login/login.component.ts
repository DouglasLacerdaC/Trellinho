import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('animaElement') elementA: any
  @ViewChildren('aside') aside: any

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    
    window.addEventListener('scroll', () => {
      
      this.animaScroll()
      
    })

  }

  authentication() {

    this.auth.signIn()

  }

  animaScroll() {

    const topPage = window.pageYOffset + ((window.innerHeight * 3) / 6)

    if(topPage > this.elementA.nativeElement.offsetTop) {

      this.elementA.nativeElement.classList.add('animacao')

    } else {

      this.elementA.nativeElement.classList.remove('animacao')

    }
    
    this.aside.forEach((element: any) => {

      if(topPage > element.nativeElement.offsetTop) {

        element.nativeElement.classList.add('aside-animation')
  
      } else {
  
        element.nativeElement.classList.remove('aside-animation')
  
      }
      
    })

  }

}
