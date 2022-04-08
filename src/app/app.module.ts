import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NeoDetailComponent } from './routes/neo-detail/neo-detail.component';
import { NeoListComponent } from './routes/neo-list/neo-list.component';
import { ButtonComponent } from './components/button/button.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { NeoComponent } from './components/neo/neo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NeoDetailComponent,
    NeoListComponent,
    ButtonComponent,
    ArrowComponent,
    NeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
