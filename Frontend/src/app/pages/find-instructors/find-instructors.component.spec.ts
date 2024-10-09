import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindInstructorsComponent } from './find-instructors.component';

describe('FindInstructorsComponent', () => {
  let component: FindInstructorsComponent;
  let fixture: ComponentFixture<FindInstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindInstructorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
