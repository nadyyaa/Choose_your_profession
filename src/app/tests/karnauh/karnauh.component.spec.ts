import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnauhComponent } from './karnauh.component';

describe('KarnauhComponent', () => {
  let component: KarnauhComponent;
  let fixture: ComponentFixture<KarnauhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarnauhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KarnauhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
