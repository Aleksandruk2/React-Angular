import { Component } from '@angular/core';
import {CategoryFormTemplate} from '../../../components/category-form-template/category-form-template';
import {FormGroup} from '@angular/forms';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-create',
  imports: [
    CategoryFormTemplate,
  ],
  templateUrl: './create.html',
  styleUrls: ['./create.css']
})

export class CategoryCreate {
  constructor(private categoryService : CategoryService) {
  }
  onSubmit(form: FormGroup) {
    if(form.invalid) {
      return;
    }
    console.log("Submit form", form.value);

    this.categoryService.createCategory(form.value).subscribe({
      next: (response) => {
        console.log("Success", response);
      },
      error: (error) => {
        console.log("Error", error);
      },
      complete: () => {
        console.log("Complete");
      }
    })
  }
}
