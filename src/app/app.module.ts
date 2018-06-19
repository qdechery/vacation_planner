import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';

import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { VoteComponent } from './vote/vote.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NguiMapModule} from '@ngui/map';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    VoteComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAXg1EdfqORW9vRMznLUkOzDS79qORUJ8E' })
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
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
