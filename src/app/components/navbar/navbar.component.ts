import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar', // <app-navbar></app-navbar>
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeDoApp: string = 'Soul-Loja';

  constructor() { }

  ngOnInit(): void {
  }

}
