import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastergym';
  usuario: User;
  cargando: boolean = true;
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario) => {
      setTimeout(() => {
        this.cargando = false;
        this.usuario = usuario;
      }, 1000);
    });
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword('denishuamanacu@gmail.com', '123456789');
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
