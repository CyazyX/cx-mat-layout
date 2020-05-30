import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxMatLayoutComponent } from './cx-mat-layout.component';

describe('CxMatLayoutComponent', () => {
  let component: CxMatLayoutComponent;
  let fixture: ComponentFixture<CxMatLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxMatLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxMatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
