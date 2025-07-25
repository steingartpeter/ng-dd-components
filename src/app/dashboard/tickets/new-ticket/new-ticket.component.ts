import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  //private form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(ttl: string, ticketText: string) {
    // console.log(`ttl: ${ttl}`);
    // console.log(`ticketText:${ticketText}`);
    this.form?.nativeElement.reset();
    // this.form().nativeElement.reset();
    // this.form()?.nativeElement.reset();
  }

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    // console.log('ngAfterViewInit runs now ...');
    // console.log(this.form?.nativeElement);
  }

  ngOnInit(): void {
    // console.log('ON INIT runs now...');
    // console.log(this.form?.nativeElement);
  }
}
