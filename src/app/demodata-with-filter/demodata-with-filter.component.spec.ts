import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodataWithFilterComponent } from './demodata-with-filter.component';

describe('DemodataWithFilterComponent', () => {
  let component: DemodataWithFilterComponent;
  let fixture: ComponentFixture<DemodataWithFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemodataWithFilterComponent]
    });
    fixture = TestBed.createComponent(DemodataWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
