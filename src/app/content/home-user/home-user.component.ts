import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  Username = '';

  constructor() { }

  ngOnInit() {
    this.Username = localStorage.getItem('Username');
  }

}
