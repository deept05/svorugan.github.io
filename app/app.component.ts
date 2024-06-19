// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = ''; // Property to bind to the username input field
  password: string = ''; // Property to bind to the password input field

  login() {
    // Handle form submission logic here
    if (this.username.trim() === '') {
      alert('Please enter a username.');
      return;
    }

    if (this.password.trim() === '') {
      alert('Please enter a password.');
      return;
    }

    // Example: Redirect to a new page or perform some action after login
    alert(`Welcome, ${this.username}!`);
  }
}
