import {
  Component,
  HostBinding,
  HostListener,
  input,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // Disable encapsulation to extend css class
  host: { class: 'control', '(click)': 'OnClickFncIncmoponent_class()' },
  // class<== possibly replaced by @HostBinding - not recommended b.c.
  // click <== possibly replaced by @HostListener - same - officially not recommended
})
export class ControlComponent {
  // @Input({required:true}) title='';
  // @HostBinding('class') className = 'control';
  @HostListener('click') onCLick(){/*Same placeholder*/}; 
  label = input.required<string>();
  OnClickFncIncmoponent_class() {
    // Just a placeholder
  }
}
