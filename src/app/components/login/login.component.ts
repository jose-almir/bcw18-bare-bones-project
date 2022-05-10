import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  senha: string = '';

  onSubmit() {
    alert(`Bem-vindo(a) ${this.email}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
