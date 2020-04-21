import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { ReadersRoutingModule } from './readers-routing.module';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { ReaderLibraryModule } from 'reader-library';
import { readersReducer } from './readers.reducer';

@NgModule({
  declarations: [
    EditReaderComponent,
    AddReaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadersRoutingModule,
    ReaderLibraryModule,
    StoreModule.forFeature('readers', readersReducer)
  ]
})
export class ReadersModule { }
