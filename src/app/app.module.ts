import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './componetApp/app.component';
import { ComponetRegistroComponent } from './componet-registro/componet-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponetSessionStartedComponent } from './componet-session-started/componet-session-started.component';
import { ComponentLoginComponent } from './component-login/component-login.component';
import { environment } from '../environments/environment';
import { AuthService } from './serviceAuth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    ComponetRegistroComponent,
    ComponetSessionStartedComponent,
    ComponentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
