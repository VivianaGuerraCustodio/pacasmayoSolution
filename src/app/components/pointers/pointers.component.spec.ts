import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointersComponent } from './pointers.component';

describe('PointersComponent', () => {
  let component: PointersComponent;
  let fixture: ComponentFixture<PointersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
