import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
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
export class ControlComponent implements AfterContentInit{
  // @Input({required:true}) title='';
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onCLick(){/*Same placeholder*/}; 
  label = input.required<string>();
  
  // Programatic access to HOST element...
  private el = inject(ElementRef);
  // @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control = contentChild<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input');
  
  OnClickFncIncmoponent_class() {
    // Just a placeholder
    console.log(this.el);
    console.log(this.control());
  }
  ngAfterContentInit(): void {
    console.log(this.control()?.nativeElement);
  }
}
