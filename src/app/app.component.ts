import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastergym';

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario)=>{
      console.log(usuario);
    });
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword('denishuamanacu@gmail.com', '123456789');
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
