import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksMainPageComponent } from './tasks-main-page.component';

describe('TasksMainPageComponent', () => {
  let component: TasksMainPageComponent;
  let fixture: ComponentFixture<TasksMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksMainPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
