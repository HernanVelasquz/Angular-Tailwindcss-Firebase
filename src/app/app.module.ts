import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './componetApp/app.component';
import { ComponetRegistroComponent } from './componet-registro/componet-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponetSessionStartedComponent } from './componet-session-started/componet-session-started.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponetRegistroComponent,
    ComponetSessionStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
