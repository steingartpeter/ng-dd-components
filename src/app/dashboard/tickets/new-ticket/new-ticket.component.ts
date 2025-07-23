import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
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
export class NewTicketComponent {

  // @ViewChild('form') private form?:ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  //private form = viewChild<ElementRef<HTMLFormElement>>('form');

  
  onSubmit(ttl: string, ticketText: string) {
    console.log(`ttl: ${ttl}`);
    console.log(`ticketText:${ticketText}`);
    //this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
    //this.form()?.nativeElement.reset();
  }
}
