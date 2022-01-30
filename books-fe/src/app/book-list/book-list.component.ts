import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      if (data) {
        this.books = data;
        //console.log(this.books);
      }
    });
  }
}
