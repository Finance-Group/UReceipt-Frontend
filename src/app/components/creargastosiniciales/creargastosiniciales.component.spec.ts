import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreargastosinicialesComponent } from './creargastosiniciales.component';

describe('CreargastosinicialesComponent', () => {
  let component: CreargastosinicialesComponent;
  let fixture: ComponentFixture<CreargastosinicialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreargastosinicialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreargastosinicialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
