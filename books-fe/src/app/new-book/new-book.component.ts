import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  bookForm = {
    name: new FormControl(''),
    author: new FormControl(''),
    isbn: new FormControl(''),
    price: new FormControl(''),
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    console.log('submit called here', form.value);
  }
}
