import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/models/repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // https://api.github.com/users/{nome}/repos // endpoints
  constructor(private http: HttpClient) {}

  getUserRepositories(nome: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(
      `https://api.github.com/users/${nome}/repos`
    );
  }
}
