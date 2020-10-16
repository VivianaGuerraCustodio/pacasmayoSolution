import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  alquiler: string;
  nameOfBox = "";
  newName = ""
  nextView() {
    document.querySelector('.formWelcome').classList.add('hide');
    document.querySelector('.formDetalleBox').classList.remove('hide');
  }
  hide() {
    document.querySelector('.modal-bg').classList.add('hide');
  }

  boxAlquiler() {
    this.alquiler = 'alquiler';
    console.log(this.alquiler);
  }

  // AÑADIR CAJITA NUEVA
  addNewBox() {
    document.querySelector('.formWelcome').classList.add('hide')
    document.querySelector('.formAddBox').classList.remove('hide')
  }
  addNameNewBox() {
    document.querySelector('.formNameBoxNew').classList.add('hide')
    document.querySelector('.formMontoBox').classList.remove('hide')
    this.newName = this.nameOfBox
    console.log(this.newName);
  }
  addTotalNewBox() {
    document.querySelector('.formMontoBox').classList.add('hide')
    document.querySelector('.formFechaLimiteBox').classList.remove('hide')
  }
  addDataBoxFirestore() {
    document.querySelector('.formFechaLimiteBox').classList.add('hide')
    document.querySelector('.formHeadAddBox').classList.add('hide')
    document.querySelector('.formConfimationBox').classList.remove('hide')
  }
  listo() {
    document.querySelector('.formWelcome').classList.remove('hide')
    
  }

}
