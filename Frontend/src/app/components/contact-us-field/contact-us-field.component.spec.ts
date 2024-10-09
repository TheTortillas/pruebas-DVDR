import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFieldComponent } from './contact-us-field.component';

describe('ContactUsFieldComponent', () => {
  let component: ContactUsFieldComponent;
  let fixture: ComponentFixture<ContactUsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
