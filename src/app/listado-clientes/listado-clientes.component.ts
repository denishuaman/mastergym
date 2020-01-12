import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  clientes: any[] = new Array<any>();

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('clientes').valueChanges().subscribe((resultado) => {
      console.log('Clientes');
      this.clientes = resultado;
      console.log('clientes ==> ', this.clientes)
    })
  }

}
