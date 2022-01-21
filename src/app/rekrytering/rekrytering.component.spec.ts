import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekryteringComponent } from './rekrytering.component';

describe('RekryteringComponent', () => {
  let component: RekryteringComponent;
  let fixture: ComponentFixture<RekryteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekryteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekryteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
