import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryComponent } from './components/history/history.component';
import { ReplaceNullWithTextPipe } from './replace-null-with-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    ReplaceNullWithTextPipe,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
