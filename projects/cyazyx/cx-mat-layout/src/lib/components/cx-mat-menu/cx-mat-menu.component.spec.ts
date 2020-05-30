import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxMatMenuComponent } from './cx-mat-menu.component';

describe('CxMatMenuComponent', () => {
  let component: CxMatMenuComponent;
  let fixture: ComponentFixture<CxMatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxMatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
