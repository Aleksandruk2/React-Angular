import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, AbstractControl, ValidationErrors, ReactiveFormsModule,} from '@angular/forms';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-category-form-template',
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './category-form-template.html',
  styleUrl: './category-form-template.css'
})

//Java = extends - наслідування класів
// implements - наслідування інтерфейсів

export class CategoryFormTemplate implements OnInit {
  //Цей клас приймає у себе параментри
  @Input() title: string = 'Create Category';

  @Output() formSubmit =
    new EventEmitter<FormGroup>();

  //Форма для категорії, потрібно надати значення
  categoryForm: FormGroup;
  errorMessage: string | null = null;

  //FormBuilder - клас для побудови форм
  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      title: ['', this.requiredMessage("Назва є обов'язковою")],
      urlSlug: ['', this.requiredMessage("slug є обов'язковим")],
      image: [null]
    });
  }

  //Коли буде виконуватися редагування категорії
  ngOnInit() {
    console.log("Ініціалізація об'єкта", "Можу послати запит на сервер")
  }

  requiredMessage(message: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value ? null : { required: message };
    }
  }
}
