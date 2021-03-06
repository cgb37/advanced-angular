import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Book } from "src/app/models/book";
import { Reader } from "src/app/models/reader";
import { DataService } from 'src/app/core/data.service';
import { BookTrackerError } from 'src/app/models/bookTrackerError';
import { Subscription } from 'rxjs';
import { logNewerBooks, logEagerReaders } from '../core/book_tracker_operators';
import { ActivityLogService } from '../core/activity-log.service';
import { BooksState } from '../books/books.reducer';
import { getFavoriteBook } from '../books/books.selectors';
import { ReadersState } from '../readers/readers.reducer';
import { getReaderOfTheMonth } from '../readers/readers.selectors';
import { LoggerService } from '../core/logger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit, OnDestroy {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;
  bookSubscription: Subscription;
  readerSubscription: Subscription;
  readerOfTheMonth: Reader;
  favoriteBookSubscription: Subscription;
  readerOfTheMonthSubscription: Subscription;

  constructor(private dataService: DataService,
              private title: Title,
              private activityService: ActivityLogService,
              private store: Store<BooksState>,
              private readersStore: Store<ReadersState>,
              private logger: LoggerService) { }
  
  ngOnInit() {

    this.logger.log('Initializing the dashboard.');

    //this.allBooks = this.dataService.getAllBooks();

    this.bookSubscription = this.dataService.getAllBooks()
      .pipe(
        logNewerBooks(1950)
      )
      .subscribe(
        books => this.allBooks = books
      );

    //this.allReaders = this.dataService.getAllReaders();

    this.readerSubscription = this.dataService.getAllReaders()
      .pipe(
        logEagerReaders(200)
      )
      .subscribe(
        readers => this.allReaders = readers
      );

    this.mostPopularBook = this.dataService.mostPopularBook;

    // this.favoriteBookSubscription = this.store.pipe(
    //   select(getFavoriteBook)
    // )
    // .subscribe(
    //   book => this.mostPopularBook = book
    // );

    this.readerOfTheMonth = this.dataService.readerOfTheMonth;

    // this.readerOfTheMonthSubscription = this.store.pipe(
	  //   select(getReaderOfTheMonth)
    // )
    // .subscribe(
    //     (reader: Reader) => this.readerOfTheMonth = reader
    // );


    this.title.setTitle(`Book Tracker`);
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
    this.readerSubscription.unsubscribe();
    // this.favoriteBookSubscription.unsubscribe();
    // this.readerOfTheMonthSubscription.unsubscribe();
  }

  deleteBook(bookID: number): void {
    this.dataService.deleteBook(bookID)
      .subscribe(
        (data: void) => {
          let index: number = this.allBooks.findIndex(book => book.bookID === bookID);
          this.allBooks.splice(index, 1);
        },
        (err: any) => console.log(err)
      );
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

  logActivity(activity: string) {
    this.activityService.logActivity(activity);
  }

}
