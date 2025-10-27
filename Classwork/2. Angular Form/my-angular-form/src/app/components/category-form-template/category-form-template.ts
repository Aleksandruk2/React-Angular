import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, AbstractControl, ValidationErrors, ReactiveFormsModule,} from '@angular/forms';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import slugify from 'slugify';

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
  @Input() urlSlug: string | null = null;

  @Output() formSubmit =
    new EventEmitter<FormGroup>();

  //Форма для категорії, потрібно надати значення
  categoryForm: FormGroup;
  errorMessage: string | null = null;
  isDragging: boolean = false;
  imagePreview: string | null = null;


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
    console.log("✅ Компонент ініціалізувався (CategoryFormTemplate)", "Можу послати запит на сервер")

    this.categoryForm.get('title')?.valueChanges.subscribe(titleValue => {
      if (!this.urlSlug) {
        const generatedSlug = slugify(titleValue || '', {
          lower: true,
          strict: true,
          locale: 'uk'
        });
        this.categoryForm.get('urlSlug')?.setValue(generatedSlug, { emitEvent: false });
      }
    });
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.errorMessage = 'Файл має бути зображенням';
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        this.imagePreview = base64;
        this.categoryForm.patchValue({ image: base64 });
        this.errorMessage = null;
      };
      reader.readAsDataURL(file);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      this.errorMessage = 'Файл має бути зображенням';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.imagePreview = base64;
      this.categoryForm.patchValue({ image: base64 });
      this.errorMessage = null;
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.categoryForm.patchValue({ image: null });
  }

  requiredMessage(message: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value ? null : { required: message };
    }
  }
}
