import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: any;

  prompt() {
    let pass = prompt('Enter Passcode.');
    if (pass === 'WILDWON') {
      window.location.href = 'https://t.me/+1wamCiv8yzE1Nzk1';
    } else {
      alert('Passcode wrong...');
    }
  }

}
