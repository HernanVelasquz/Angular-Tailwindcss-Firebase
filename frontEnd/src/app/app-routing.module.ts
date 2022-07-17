import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './ComponentHero/heroes/heroes.component';
import { HeroDetailComponent } from './ComponentHero/hero-detail/hero-detail.component';

const router: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full' 
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent 
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
