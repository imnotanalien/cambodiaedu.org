import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorNavbarComponent } from './calculator-navbar.component';

describe('CalculatorNavbarComponent', () => {
  let component: CalculatorNavbarComponent;
  let fixture: ComponentFixture<CalculatorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
