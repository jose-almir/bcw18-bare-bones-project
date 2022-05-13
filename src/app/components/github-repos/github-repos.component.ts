import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { GithubService } from 'src/app/shared/services/github/github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css'],
})
export class GithubReposComponent implements OnInit {
  username: string = '';
  resultados: Repository[] = [];
  loading = false;

  constructor(private githubService: GithubService) {}

  onBuscar() {
    this.loading = true;
    this.githubService.getUserRepositories(this.username).subscribe({
      next: (repositorios) => {
        this.resultados = repositorios;
        this.loading = false;
        this.username = '';
      },
      error: (err) => {
        this.loading = false;
        this.resultados = [];
        alert("Usuário não encontrado");
      }
    });
  }

  ngOnInit(): void {}
}
