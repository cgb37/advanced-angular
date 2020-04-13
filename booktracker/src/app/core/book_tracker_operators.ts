import { Observable } from "rxjs";
import { Book } from "../models/book";
import { tap } from "rxjs/operators";

export function logNewerBooks(year: number) {
  return (source$: Observable<Book[]>) => source$.pipe(
    tap(books => books.forEach(b => b.publicationYear > year ? console.log(b): null))
  );
}