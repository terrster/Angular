import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { appRouting } from './app.routes';
import { DetailsComponent } from './components/details/details.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosComponent,
    NavbarComponent,
    AboutUsComponent,
    DetailsComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    appRouting,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
