import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import {AddBookComponent} from "./add-book/add-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";


@NgModule({
  declarations: [
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
