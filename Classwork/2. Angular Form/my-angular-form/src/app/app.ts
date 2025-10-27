import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('my-angular-form');

  constructor(private router : Router) {
  }

  ngOnDestroy() {
    console.log('❌ Компонент знищується');
  }

  ngOnInit() {
    console.log('✅ Компонент ініціалізувався (App) перехід на "Головну" (Home 🏠)');
    this.router.navigate(['/category/home']);
  }



}
