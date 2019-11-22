import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeAtPriceComponent } from './volume-at-price.component';

describe('VolumeAtPriceComponent', () => {
  let component: VolumeAtPriceComponent;
  let fixture: ComponentFixture<VolumeAtPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeAtPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeAtPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
