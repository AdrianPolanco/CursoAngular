import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAboutPageComponent } from './tasks-about-page.component';

describe('TasksAboutPageComponent', () => {
  let component: TasksAboutPageComponent;
  let fixture: ComponentFixture<TasksAboutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksAboutPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
