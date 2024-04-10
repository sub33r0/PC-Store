import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPartPageComponent } from './pc-part-page.component';

describe('PcPartPageComponent', () => {
  let component: PcPartPageComponent;
  let fixture: ComponentFixture<PcPartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcPartPageComponent]
    });
    fixture = TestBed.createComponent(PcPartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
