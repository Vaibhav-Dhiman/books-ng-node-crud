import { NgModule } from '@angular/core';
import { NewBookComponent } from './new-book/new-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'new', component: NewBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
