import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';

import { AppComponent } from './appComponent/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './ComponentHero/hero-detail/hero-detail.component';
import { HeroesComponent } from './ComponentHero/heroes/heroes.component';
import { MessagesComponent } from './services/messages/messages.component';
import { ObjetToArray } from './services/pipe/objToArray';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './ComponentHero/hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ObjetToArray,
    HeroSearchComponent,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
