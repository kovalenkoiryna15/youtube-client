import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSwitcherComponent } from './sidebar-switcher.component';

describe('SidebarSwitcherComponent', () => {
  let component: SidebarSwitcherComponent;
  let fixture: ComponentFixture<SidebarSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarSwitcherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
