import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
//import { HeaderComponent } from './header/header.component';
import { QuizesComponent } from './quizes/index';

import { AuthGuard } from './guards/index';
//import { InitialDataResolver } from './initial-data.resolver';
const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'quize', component: QuizesComponent},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);