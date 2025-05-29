import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complex-button',
  imports: [FormsModule,CommonModule],
  templateUrl: './complex-button.component.html',
  styleUrl: './complex-button.component.css'
})
export class ComplexButtonComponent {
    colorVar: string = "";
appliedColor: string = "";
errorMsg: string = "";

onColorChange(color: string) {
  const temp = document.createElement('div');
  temp.style.color = color;

  if (temp.style.color === "") {
    this.colorVar = "";
    this.errorMsg = "Enter Valid Color";
  } else {
    this.colorVar= color;
    this.errorMsg = "";
  }
}
}
