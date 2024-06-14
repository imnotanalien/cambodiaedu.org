import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNavbarComponent } from './about-navbar.component';

describe('AboutNavbarComponent', () => {
  let component: AboutNavbarComponent;
  let fixture: ComponentFixture<AboutNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
