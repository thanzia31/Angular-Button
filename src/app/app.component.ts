import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';
import { ComplexButtonComponent } from './components/complex-button/complex-button.component';

@Component({
  selector: 'app-root',
  imports: [SimpleButtonComponent,ComplexButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'button-task';
}
