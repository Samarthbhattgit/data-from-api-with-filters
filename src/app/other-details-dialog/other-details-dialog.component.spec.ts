import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDetailsDialogComponent } from './other-details-dialog.component';

describe('OtherDetailsDialogComponent', () => {
  let component: OtherDetailsDialogComponent;
  let fixture: ComponentFixture<OtherDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(OtherDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
