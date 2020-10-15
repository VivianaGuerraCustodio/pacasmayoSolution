import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})

export class SavingService {


  constructor(public firestore: AngularFirestore) {
    // this.savings = firestore.collection('ahorro').valueChanges();
  }
  newRegister(titularNombre,titularApellido, titularDni,titularTelefono) {
    return this.firestore.collection("Familias").add({
      titularNombre : titularNombre,
      titularApellido : titularApellido,
      titularDni : titularDni,
      titularTelefono : titularTelefono,
    });
  }
  
  getSaving() {
    return this.firestore.collection("ahorro").snapshotChanges();
  }
}
