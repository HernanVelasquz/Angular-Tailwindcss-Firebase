import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './componetApp/app.component';
import { ComponetRegistroComponent } from './componet-registro/componet-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponetSessionStartedComponent } from './componet-session-started/componet-session-started.component';

const routes: Routes = [
  { path: '', redirectTo: '/singIn', pathMatch: 'full' },
  { path: 'singIn', component: AppComponent },
  { path: 'register', component: ComponetRegistroComponent },
  { path: 'sessionStarted', component: ComponetSessionStartedComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ComponetRegistroComponent,
    ComponetSessionStartedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
