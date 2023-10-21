import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldNgifComponent } from './hello-world-ngif.component';

describe('HelloWorldNgifComponent', () => {
  let component: HelloWorldNgifComponent;
  let fixture: ComponentFixture<HelloWorldNgifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldNgifComponent]
    });
    fixture = TestBed.createComponent(HelloWorldNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
