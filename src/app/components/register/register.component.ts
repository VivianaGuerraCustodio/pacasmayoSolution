import { Component, OnInit } from '@angular/core';
import { SavingService } from '../../services/saving.service';
import { HomeComponent } from '../home/home.component';
import { routes } from '../../app-routing.module'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(public firestoreService: SavingService) { }

  ngOnInit(): void {
  }
  titularNombre = '';
  titularApellido = '';
  titularDNI = '';
  titularTelefono = '';
  nextView() {
    document.querySelector('.formOne').classList.add('hide')
    document.querySelector('.formTwo').classList.remove('hide')
  }
  lastNext() {
    document.querySelector('.formThree').classList.remove('hide')
    document.querySelector('.formTwo').classList.add('hide')
  }
  saveNewUser() {

    /*
    routes.forEach({
      path: "HomeComponent"
    })
    this.firestoreService.newRegister(this.titularNombre, this.titularApellido, this.titularDNI, this.titularTelefono).then(() => {
      this.titularNombre = '';
      this.titularApellido = '';
      this.titularDNI = '';
      this.titularTelefono = '';
      
    })*/

  }

}
