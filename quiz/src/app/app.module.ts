import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helper/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { JwtInterceptor } from './helper/index';
import { AlertService, AuthenticationService, UserService } from './service/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
//import { HeaderComponent } from './header/header.component';
import { QuizesComponent } from './quizes/index';
//import { TimerComponent } from './timer.component';
import {enableProdMode} from '@angular/core';
//import { ErrorsHandler } from './errors-handler';
enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
       
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        
        QuizesComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
       
         UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }