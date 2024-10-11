import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CourseRegisterComponent } from './pages/course-register/course-register.component'
import { homedir } from 'os';
import { FindInstructorsComponent } from './pages/find-instructors/find-instructors.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InstructorRegisterComponent } from './pages/instructor-register/instructor-register.component';
import { StepperComponent } from './pages/stepper/stepper.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path:'contact-us',
        component: ContactUsPageComponent
    },

    {
        path:'login',
        component: LoginPageComponent
    },

    {
        path: 'course-register',
        component: StepperComponent
        //component: CourseRegisterComponent
    },

    {
        path: 'find-instructors',
        component: FindInstructorsComponent
    },

    {
        path: 'instructor-register',
        component: InstructorRegisterComponent
    },

    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
    },

    {
        path:'**',
        component: PageNotFoundComponent
    }

    
];
