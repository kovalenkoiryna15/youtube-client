import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByTagsComponent } from './filter-by-chips.component';

describe('FilterComponent', () => {
  let component: FilterByTagsComponent;
  let fixture: ComponentFixture<FilterByTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterByTagsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
