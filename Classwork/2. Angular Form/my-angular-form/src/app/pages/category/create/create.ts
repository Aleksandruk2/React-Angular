import { Component } from '@angular/core';
import {CategoryFormTemplate} from '../../../components/category-form-template/category-form-template';

@Component({
  selector: 'app-create',
  imports: [
    CategoryFormTemplate
  ],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class CategoryCreate {

}
