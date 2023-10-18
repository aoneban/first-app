import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ActorsDetailComponent } from './actors-detail/actors-detail.component';
import { ActorsModule } from './actors/actors.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmDetailComponent,
    HeaderComponent,
    FooterComponent,
   ActorsDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ActorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
