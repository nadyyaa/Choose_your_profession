import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollandComponent } from './holland.component';

describe('HollandComponent', () => {
  let component: HollandComponent;
  let fixture: ComponentFixture<HollandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HollandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
