import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ICategory} from '../../models/Category';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    NgForOf
  ],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List implements OnInit {

  urlImage: null | string = 'https://lohika.itstep.click/images/800_';
  data: ICategory[] = [];
  animatedIndex: number | null = null;
  isModal = true;
  isImageModal = true;
  currentIndex: number = 1;
  currentTitle: string = "";
  currentUrlSlug: string = "";
  currentImageUrl: string = "";

  constructor(private categoryService : CategoryService) {}

  ngOnInit() {
    console.log("✅ Компонент ініціалізувався (List 📃)", "Можу переглянути список")

    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.data = response;
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

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    // console.log("open onImageError / target:", img);
    // Якщо поточне зображення — не fallback, замінюємо його
    if (img.src.includes('assets/img/default.png')) {
      // нічого не робимо, це вже дефолт
    } else {
      img.src = 'assets/img/missing.png';
    }
  }

  onImageClick(event: Event, index: number) {
    const img = event.target as HTMLImageElement;
    // console.log("open onImageClick / target:", img);
    // console.log("image src:", img.src);
    this.currentTitle = this.data[index].title;
    this.currentUrlSlug = this.data[index].urlSlug;
    this.currentImageUrl = img.src;
    this.openImageModal();
  }

  onBtnClick(index: number) {
    console.log("Delete my-id:",index,"server-id:", this?.data[index].id,"title:",this.data[index].title);
    this.currentIndex = index;
    this.currentTitle = this.data[index].title;
    this.currentUrlSlug = this.data[index].urlSlug;
    this.openModal();
  }

  onStartAnimation(index: number) {
    this.animatedIndex = index;
    setTimeout(() => this.animatedIndex = null, 700);
  }

  deleteCard() {
    this.onStartAnimation(this.currentIndex);
    setTimeout(() => this.data.splice(this.currentIndex,1),700);
    this.categoryService.deleteCategory(this.data[this.currentIndex].id).subscribe({
      next: (response) => {
        console.log("Delete Success", response);
      },
      error: (error) => {
        console.log("Delete Error", error);
      },
      complete: () => {
        console.log("Delete Complete");
      }
    })
    this.openModal();
  }

  openModal() {
    this.isModal = !this.isModal;
  }

  openImageModal() {
    this.isImageModal = !this.isImageModal;
  }

  overTakeImageModal(event: MouseEvent) {
    if (event.target === event.currentTarget)
    {
      this.isImageModal = !this.isImageModal;
    }
  }
}
