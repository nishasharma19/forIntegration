import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdtaeComponent } from './employee-updtae.component';

describe('EmployeeUpdtaeComponent', () => {
  let component: EmployeeUpdtaeComponent;
  let fixture: ComponentFixture<EmployeeUpdtaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeUpdtaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdtaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
