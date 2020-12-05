import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitgriveancesComponent } from './submitgriveances.component';

describe('SubmitgriveancesComponent', () => {
  let component: SubmitgriveancesComponent;
  let fixture: ComponentFixture<SubmitgriveancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitgriveancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitgriveancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
