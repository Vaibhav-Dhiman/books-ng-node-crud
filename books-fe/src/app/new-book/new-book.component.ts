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
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  onSubmit(form: FormGroup) {}
}
