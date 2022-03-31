import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsService } from './authors/authors.service';
import { AuthorsModule } from './authors/authors.module';
import { CoreModule } from './core-module/core.module';
import { AuthorsRoutingModule } from './authors/authors-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthorsModule,
    CoreModule,
    AuthorsRoutingModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
