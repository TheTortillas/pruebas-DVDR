import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCertificatesComponent } from './request-certificates.component';

describe('RequestCertificatesComponent', () => {
  let component: RequestCertificatesComponent;
  let fixture: ComponentFixture<RequestCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
