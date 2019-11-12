import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperdomComponent } from './superdom.component';

describe('SuperdomComponent', () => {
  let component: SuperdomComponent;
  let fixture: ComponentFixture<SuperdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
