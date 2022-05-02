import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  slogan: string = 'A melhor loja de todas!';
  endereco: string = 'Rua X, São Paulo';
  callToAction: string = 'Compre agora';

  constructor() { }

  ngOnInit(): void {
  }

}
