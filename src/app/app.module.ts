import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsService } from './authors/authors.service';
import { AuthorsModule } from './authors/authors.module';
import { CoreModule } from './core-module/core.module';
import { AuthorsRoutingModule } from './authors/authors-routing.module';
import { PublishersModule } from './publishers/publishers.module';
import { PublishersRoutingModule } from './publishers/publishers-routing.module';
import { PublishersService } from './publishers/publishers.service';

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
    AuthorsRoutingModule,
    PublishersModule,
    PublishersRoutingModule
  ],
  providers: [
    AuthorsService,
    PublishersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
