import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteraxComponent } from './carterax.component';

describe('CarteraxComponent', () => {
  let component: CarteraxComponent;
  let fixture: ComponentFixture<CarteraxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteraxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteraxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
