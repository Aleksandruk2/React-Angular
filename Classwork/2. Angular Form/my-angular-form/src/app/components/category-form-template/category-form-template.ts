import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-form-template',
  imports: [],
  templateUrl: './category-form-template.html',
  styleUrl: './category-form-template.css'
})

//Java = extends - наслідування класів
// implements - наслідування інтерфейсів

export class CategoryFormTemplate implements OnInit {
  //Цей клас приймає у себе параментри
  @Input() title: string = 'Create Category';

  //Коли буде виконуватися редагування категорії
  ngOnInit() {
    console.log("Ініціалізація об'єкта", "Можу послати запит на сервер")
  }
}
