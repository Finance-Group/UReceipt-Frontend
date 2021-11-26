import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteragastofinalComponent } from './carteragastofinal.component';

describe('CarteragastofinalComponent', () => {
  let component: CarteragastofinalComponent;
  let fixture: ComponentFixture<CarteragastofinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteragastofinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteragastofinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
