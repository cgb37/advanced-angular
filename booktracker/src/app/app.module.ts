import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksModule } from './books/books.module';
import { ReadersModule } from './readers/readers.module';
import { SharedModule } from './shared/shared.module';
import { BookLibraryModule } from 'book-library';
import { LibraryComponent } from './library/library.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LibraryComponent,
    InventoryComponent,
    ActivityLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BooksModule,
    ReadersModule,
    SharedModule,
    BookLibraryModule,
    StoreModule.forRoot({})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
