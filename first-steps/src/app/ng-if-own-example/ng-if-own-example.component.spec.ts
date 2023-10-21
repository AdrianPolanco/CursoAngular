import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfOwnExampleComponent } from './ng-if-own-example.component';

describe('NgIfOwnExampleComponent', () => {
  let component: NgIfOwnExampleComponent;
  let fixture: ComponentFixture<NgIfOwnExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgIfOwnExampleComponent]
    });
    fixture = TestBed.createComponent(NgIfOwnExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
