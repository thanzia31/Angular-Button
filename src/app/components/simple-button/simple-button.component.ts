import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-button',
  imports: [CommonModule,FormsModule],
  templateUrl: './simple-button.component.html',
  styleUrl: './simple-button.component.css'
})
export class SimpleButtonComponent {

    colorVar: string = "";
    colorInput: string = "";
    errorMsg: string = "";

changeColor() {
  
  const temp = document.createElement('div');
  temp.style.color = this.colorInput;

 
  if (temp.style.color === "") {
    this.colorVar = "";
    this.errorMsg = "Enter Valid Color";
  } else {
    this.colorVar = this.colorInput;
    this.errorMsg = "";
  }
}
}
