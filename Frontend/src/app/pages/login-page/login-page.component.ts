import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import  { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private route: Router){}

  form:FormGroup = new FormGroup(
    {
      email: new FormControl("",[Validators.email, Validators.required])
    }
  );

  Login(){
    if(this.form.get("email")?.value == 'ecc@g.com'){
        this.route.navigateByUrl("home");
    }
  }
  
}
