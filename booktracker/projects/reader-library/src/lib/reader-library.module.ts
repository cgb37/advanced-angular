import { NgModule } from '@angular/core';
import { ReaderLibraryComponent } from './reader-library.component';
import { ReaderGreetingComponent } from './reader-greeting/reader-greeting.component';



@NgModule({
  declarations: [ReaderLibraryComponent, ReaderGreetingComponent],
  imports: [
  ],
  exports: [ReaderLibraryComponent, ReaderGreetingComponent]
})
export class ReaderLibraryModule { }
