import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousellogoComponent } from './carousellogo.component';

describe('CarousellogoComponent', () => {
  let component: CarousellogoComponent;
  let fixture: ComponentFixture<CarousellogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousellogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarousellogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
