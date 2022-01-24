import { Component, OnInit } from '@angular/core';
import { BookServiceService } from './book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'books-fe';
  books: any[] = [];

  constructor(private readonly bookService: BookServiceService) {}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;

      console.log(this.books);
    });
  }
}
