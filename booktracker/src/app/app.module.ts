import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReadersModule } from './readers/readers.module';
import { SharedModule } from './shared/shared.module';
import { BookLibraryModule } from 'book-library';
import { LibraryComponent } from './library/library.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { LoggerService } from './core/logger.service';
import { PlainLoggerService } from './core/plain-logger.service';
import { AddHeaderInterceptor } from './core/add-header.interceptor';
import { LogUrlInterceptor } from './core/log-url.interceptor';


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
    ReadersModule,
    SharedModule,
    BookLibraryModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'BookTracker'
    })
  ],
  providers: [
    { provide: LoggerService, useClass: PlainLoggerService },
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogUrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
