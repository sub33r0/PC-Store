import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefalutButtonComponent } from './defalut-button.component';

describe('DefalutButtonComponent', () => {
  let component: DefalutButtonComponent;
  let fixture: ComponentFixture<DefalutButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefalutButtonComponent]
    });
    fixture = TestBed.createComponent(DefalutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
