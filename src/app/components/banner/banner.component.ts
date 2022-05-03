import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  slogan: string = 'A melhor loja de todas!';
  endereco: string = 'Rua X, São Paulo';
  callToAction: string = 'Mostrar destaques';
  oculto: boolean = true;
  classesBtn: string = "btn btn-primary";

  onToggle() {
    this.oculto = !this.oculto;

    if (this.oculto) {
      this.classesBtn = "btn btn-primary";
      this.callToAction = "Mostrar destaques";
    } else {
      this.classesBtn = "btn btn-danger";
      this.callToAction = "Ocultar destaques";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
