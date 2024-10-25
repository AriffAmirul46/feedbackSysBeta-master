import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // Navigate to Feedback Page
  goToFeedback() {
    this.router.navigate(['/feedback']);
  }

  // Open Menu (This can be optional, depending on how your menu works)
  openMenu() {
    const menuCtrl = document.querySelector('ion-menu');
    menuCtrl!.open();
  }

  // Logout Function
  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']);  // Redirect to login page after logout
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }
}
