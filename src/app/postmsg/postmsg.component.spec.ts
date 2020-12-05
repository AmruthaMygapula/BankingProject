import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmsgComponent } from './postmsg.component';

describe('PostmsgComponent', () => {
  let component: PostmsgComponent;
  let fixture: ComponentFixture<PostmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
