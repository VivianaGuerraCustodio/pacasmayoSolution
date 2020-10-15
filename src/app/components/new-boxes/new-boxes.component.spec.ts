import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoxesComponent } from './new-boxes.component';

describe('NewBoxesComponent', () => {
  let component: NewBoxesComponent;
  let fixture: ComponentFixture<NewBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
