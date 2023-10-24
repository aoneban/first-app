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
import { OpinionsComponent } from './opinions/opinions.component';
import { TruncatePipe } from './truncate.pipe';
import { TrailersComponent } from './trailers/trailers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmDetailComponent,
    HeaderComponent,
    FooterComponent,
    ActorsDetailComponent,
    OpinionsComponent,
    TruncatePipe,
    TrailersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
