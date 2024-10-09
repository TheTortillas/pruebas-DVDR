import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent} from './components/footer/footer.component';
import { ContactUsFieldComponent } from './components/contact-us-field/contact-us-field.component';
import { LoginFieldComponent } from './components/login-field/login-field.component';
import { StepperIndicatorComponent } from './components/stepper-indicator/stepper-indicator.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    RouterOutlet, 
    NavbarComponent, 
    FooterComponent, 
    ContactUsFieldComponent, 
    LoginFieldComponent,
     StepperIndicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pruebas-DVDR';
}
