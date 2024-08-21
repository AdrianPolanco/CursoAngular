import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImagePageComponent } from './upload-image-page.component';

describe('UploadImagePageComponent', () => {
  let component: UploadImagePageComponent;
  let fixture: ComponentFixture<UploadImagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadImagePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadImagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
