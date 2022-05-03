import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDataBindingComponent } from './teste-data-binding.component';

describe('TesteDataBindingComponent', () => {
  let component: TesteDataBindingComponent;
  let fixture: ComponentFixture<TesteDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
