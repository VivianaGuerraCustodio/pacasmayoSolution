import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SavingService {


  constructor(public firestore: AngularFirestore) { 
    // this.savings = firestore.collection('ahorro').valueChanges();
  }

  getSaving(){
    return this.firestore.collection("ahorro").snapshotChanges();
  }
}
