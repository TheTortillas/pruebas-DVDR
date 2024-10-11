import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-instructor-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './instructor-register.component.html',
  styleUrl: './instructor-register.component.scss'
})
export class InstructorRegisterComponent {

  form:FormGroup = new FormGroup(
    {
      email: new FormControl("",[Validators.email, Validators.required])
    }
  );
}
