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

  message: string | null = "";
  isModal = true;

  constructor(private categoryService : CategoryService) {}

  ngOnInit() {
    console.log("✅ Компонент ініціалізувався (Home 🏠)", "Можу працювати із сайтом")
    this.categoryService.currentMessage.subscribe(msg => this.message = msg);
    this.openModal();
  }

  ngOnDestroy() {
    console.log('❌ Компонент знищується');
    this.openModal();
  }

  openModal() {
    this.isModal = !this.isModal;
  }

  overTakeModal(event: MouseEvent) {
    if (event.target === event.currentTarget)
    {
      this.isModal = !this.isModal;
    }
  }
}
