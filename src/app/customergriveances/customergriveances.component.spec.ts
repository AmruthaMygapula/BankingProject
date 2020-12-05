import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomergriveancesComponent } from './customergriveances.component';

describe('CustomergriveancesComponent', () => {
  let component: CustomergriveancesComponent;
  let fixture: ComponentFixture<CustomergriveancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomergriveancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomergriveancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
