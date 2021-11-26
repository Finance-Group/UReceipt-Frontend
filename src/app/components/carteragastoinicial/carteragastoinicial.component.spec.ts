import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteragastoinicialComponent } from './carteragastoinicial.component';

describe('CarteragastoinicialComponent', () => {
  let component: CarteragastoinicialComponent;
  let fixture: ComponentFixture<CarteragastoinicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteragastoinicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteragastoinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
