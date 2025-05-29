import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexButtonComponent } from './complex-button.component';

describe('ComplexButtonComponent', () => {
  let component: ComplexButtonComponent;
  let fixture: ComponentFixture<ComplexButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
