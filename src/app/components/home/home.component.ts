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
    document.querySelector('.formOne').classList.add('hide')
    document.querySelector('.formTwo').classList.remove('hide')  
  }

  addNewBox(){
    document.querySelector('.formOne').classList.add('hide')
    document.querySelector('.formAddBox').classList.remove('hide')
  }

}
