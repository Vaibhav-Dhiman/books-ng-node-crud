import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    // to do make table header dynamic also
    let books = this.bookService.getBooks().subscribe((data) => {
      console.log(data);
    });
  }
}
