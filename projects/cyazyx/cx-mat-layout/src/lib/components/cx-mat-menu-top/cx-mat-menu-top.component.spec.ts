import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxMatMenuTopComponent } from './cx-mat-menu-top.component';

describe('CxMatMenuTopComponent', () => {
  let component: CxMatMenuTopComponent;
  let fixture: ComponentFixture<CxMatMenuTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxMatMenuTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxMatMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
