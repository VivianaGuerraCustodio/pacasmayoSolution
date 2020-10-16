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

  nextView(){
    document.querySelector('.formWelcome').classList.add('hide');
    document.querySelector('.formDetalleBox').classList.remove('hide');
  }

  // AÑADIR CAJITA NUEVA
  addNewBox(){
    document.querySelector('.formWelcome').classList.add('hide')
    document.querySelector('.formAddBox').classList.remove('hide')
  }
  addNameNewBox(){
    document.querySelector('.formNameBoxNew').classList.add('hide')
    document.querySelector('.formMontoBox').classList.remove('hide')
  }
  addTotalNewBox(){
    document.querySelector('.formMontoBox').classList.add('hide')
    document.querySelector('.formFechaLimiteBox').classList.remove('hide')
  }
  addDataBoxFirestore(){
    document.querySelector('.formFechaLimiteBox').classList.add('hide')
    document.querySelector('.formHeadAddBox').classList.add('hide')
    document.querySelector('.formConfimationBox').classList.remove('hide')
  }
  listo(){
    document.querySelector('.formConfimationBox').classList.add('hide')
    document.querySelector('.formWelcome').classList.remove('hide')
    // document.querySelector('.formAddBox').classList.remove('hide')
  }

  // const functionDisplay = (id) => {
  //   if (document.getElementById){ //se obtiene el id
  //   var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
  //   el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
  //   }
  // };
  // window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
  //   muestra_oculta('contenido');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
  //   }
}
