import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ICategory} from '../../models/Category';

@Component({
  selector: 'app-home',
  imports: [
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  implements OnInit, OnDestroy {

  constructor(private categoryService : CategoryService) {}

  ngOnInit() {
    console.log("✅ Компонент ініціалізувався (Home 🏠)", "Можу послати запит на сервер")

  }

  ngOnDestroy() {
    console.log('❌ Компонент знищується');
  }
}
