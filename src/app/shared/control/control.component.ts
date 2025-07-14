import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None, // Disable encapsulation to extend css class
})
export class ControlComponent {
  //@Input({required:true}) title='';
  label = input.required<string>();
}
