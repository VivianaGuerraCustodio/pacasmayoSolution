import { Component, OnInit } from '@angular/core';
import { SavingService } from '../../services/saving.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /* 
  db.collection("pedidos")
        .add({
          colaborador: localStorage.getItem("usuario"),
          cliente: this.nombre,
          mesa: this.mesa,
          status: "pendiente",
          resumen_de_pedido: Array.from(this.infohijo),
          nota: this.nota_adicional,
          hora_pedido: firebase.firestore.FieldValue.serverTimestamp(),
          hora_envio_salon: "",
          pago_total: this.total
        })
        .then(() => {
          this.aviso = "Se envió el pedido a cocina";
          setTimeout(() => {
            (this.nombre = ""),
              (this.mesa = ""),
              (this.nota_adicional = ""),
              (this.aviso = ""),
              (this.infohijo = ""),
              (this.mesa = ""),
              (this.total = "");
          }, 5000);
        })
        .catch(() => {
          this.aviso = "Hubo un error, toma el pedido de nuevo :)";
        });
  */

  constructor(public firestoreService: SavingService) { }

  ngOnInit(): void {
  }
  titularNombre = '';
  titularApellido = '';
  titularDNI = '';
  titularTelefono = '';

  saveNewUser() {
    this.firestoreService.newRegister(this.titularNombre, this.titularApellido, this.titularDNI, this.titularTelefono).then(() => {
      this.titularNombre = '';
      this.titularApellido = '';
      this.titularDNI = '';
      this.titularTelefono = '';
    })
  }

}
