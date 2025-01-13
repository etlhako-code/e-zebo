import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductCardComponent} from './product-card/product-card.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-ZEBO';
}
