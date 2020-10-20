import { Component, OnInit } from '@angular/core';
import { SavingService } from '../../services/saving.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(public firestoreService: SavingService, private router: Router) { }

  ngOnInit(): void {
  }
  Apellido = localStorage.getItem('Apellido');
  titularNombre = '';
  titularApellido = '';
  titularDNI = '';
  titularTelefono = '';
  passwordTitular = '';
  nextView() {
    document.querySelector('.formOne').classList.add('hide')
    document.querySelector('.formTwo').classList.remove('hide')
  }
  lastNext() {
    document.querySelector('.formThree').classList.remove('hide')
    document.querySelector('.formTwo').classList.add('hide')
  }
  saveNewUser() {
    // console.log('oooo: '+ this.titularNombre);
    localStorage.setItem('Apellido', this.titularApellido)
    this.firestoreService.newRegister(this.titularNombre, this.titularApellido, this.titularDNI, this.titularTelefono).then(() => {
      this.titularNombre = '';
      this.titularDNI = '';
      this.titularTelefono = '';
      document.querySelector('#redirectToSignIn').classList.remove('hide');
    })

  }
  redirectToSignIn() {
    this.router.navigate(['/login']);
  }
  hide() {
    document.querySelector('#redirectToSignIn').classList.add('hide');
  }
}
