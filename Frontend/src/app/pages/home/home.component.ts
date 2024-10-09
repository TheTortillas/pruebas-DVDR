import { Component } from '@angular/core';
import { ContactUsFieldComponent } from '../../components/contact-us-field/contact-us-field.component'; 
import { LoginFieldComponent } from '../../components/login-field/login-field.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactUsFieldComponent, LoginFieldComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
