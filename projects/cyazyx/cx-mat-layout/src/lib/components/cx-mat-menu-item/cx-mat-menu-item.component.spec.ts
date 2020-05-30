import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CxMatMenuItemComponent } from './cx-mat-menu-item.component';

describe('CxMatMenuItemComponent', () => {
  let component: CxMatMenuItemComponent;
  let fixture: ComponentFixture<CxMatMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CxMatMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CxMatMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
