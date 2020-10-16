import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alquiler: string;
  nameOfBox = '';
  cantOfBox = '';
  dateLimiteOfBox = '';

  newName = "";
  dato
  nextView(){
    document.querySelector('.formWelcome').classList.add('hide');
    document.querySelector('.formDetalleBox').classList.remove('hide');
  }

  boxAlquiler() {
    this.alquiler = 'alquiler';
    console.log(this.alquiler)
    localStorage.setItem('alquilerBox', this.alquiler);
  }

  hide(){
    document.querySelector('.modal-bg').classList.add('hide');
  }
  // AÑADIR CAJITA NUEVA
  addNewBox(){
    document.querySelector('.formWelcome').classList.add('hide')
    document.querySelector('.formAddBox').classList.remove('hide')
    console.log(new Date());
  }
  addNameNewBox(){
    document.querySelector('.formNameBoxNew').classList.add('hide')
    document.querySelector('.formMontoBox').classList.remove('hide')
    localStorage.setItem('nameOfBox',this.nameOfBox);
    // this.newName = $scope.pruebaName;
    console.log(this.nameOfBox);

    
  }
  addTotalNewBox(){
    document.querySelector('.formMontoBox').classList.add('hide')
    document.querySelector('.formFechaLimiteBox').classList.remove('hide')
    localStorage.setItem('cantOfBox',this.cantOfBox);
    this.dato = localStorage.getItem('nameOfBox');
    console.log(this.dato);
    // console.log(prueba);
  }
  addDataBoxFirestore(){
    document.querySelector('.formFechaLimiteBox').classList.add('hide')
    document.querySelector('.formHeadAddBox').classList.add('hide')
    document.querySelector('.formConfimationBox').classList.remove('hide')
    localStorage.setItem('dateLimiteOfBox',this.dateLimiteOfBox);
    
  }
  listo(){
    document.querySelector('.formConfimationBox').classList.add('hide')
    document.querySelector('.formWelcome').classList.remove('hide')
    
    // document.querySelector('.formAddBox').classList.remove('hide')
  }

}
