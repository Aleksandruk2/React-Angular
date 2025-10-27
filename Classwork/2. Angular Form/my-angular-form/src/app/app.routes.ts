import { Routes } from '@angular/router';
import {CategoryCreate} from './pages/category/create/create';
import {Home} from './pages/home/home';
import {List} from './pages/list/list';

export const routes: Routes = [
  {
    path: "category",
    children: [
      {
        path: 'create', component: CategoryCreate
      },
      {
        path: 'list', component: List
      },
      {
        path: 'home', component: Home
      }
    ]
  }
];
