import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingsComponent } from './sortings.component';

describe('SortingsComponent', () => {
  let component: SortingsComponent;
  let fixture: ComponentFixture<SortingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
