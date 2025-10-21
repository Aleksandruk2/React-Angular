import { Routes } from '@angular/router';
import {CategoryCreate} from './pages/category/create/create';

export const routes: Routes = [
  {
    path: "category",
    children: [
      {
        path: 'create', component: CategoryCreate
      }
    ]
  }
];
