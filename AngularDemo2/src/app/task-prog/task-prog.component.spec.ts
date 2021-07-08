import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskProgComponent } from './task-prog.component';

describe('TaskProgComponent', () => {
  let component: TaskProgComponent;
  let fixture: ComponentFixture<TaskProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
