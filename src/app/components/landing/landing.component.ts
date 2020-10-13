import { Component, OnInit } from '@angular/core';
import { SavingService } from '../../services/saving.service';

@Component({
  selector: 'app-landings',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  savings;
  constructor(public firestoreService: SavingService) { }

  ngOnInit(): void {

    //cargando todos los ahorros de firestore
    this.firestoreService.getSaving().subscribe(resp => {
      this.savings = [];
      resp.forEach((e: any) => {
        this.savings.push({
          id: e.payload.doc.data().id,
          nombre: e.payload.doc.data().nombre,
          dni: e.payload.doc.data().dni,
        })        
      })
    })
  }

}
