import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadersRoutingModule } from './readers-routing.module';
import {EditReaderComponent} from "./edit-reader/edit-reader.component";
import {AddReaderComponent} from "./add-reader/add-reader.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EditReaderComponent,
    AddReaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadersRoutingModule
  ]
})
export class ReadersModule { }
