import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './componetApp/app.component';
import { ComponetRegistroComponent } from './componet-registro/componet-registro.component';
import { ComponetSessionStartedComponent } from './componet-session-started/componet-session-started.component';


const routes: Routes = [
  { path: '', redirectTo: '/singIn', pathMatch: 'full' },
  { path: 'singIn', component: AppComponent },
  { path: 'register', component: ComponetRegistroComponent },
  { path: 'sessionStarted', component: ComponetSessionStartedComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
