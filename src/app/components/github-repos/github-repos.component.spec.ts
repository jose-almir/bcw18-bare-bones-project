import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubReposComponent } from './github-repos.component';

describe('GithubReposComponent', () => {
  let component: GithubReposComponent;
  let fixture: ComponentFixture<GithubReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
