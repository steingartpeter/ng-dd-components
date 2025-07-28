import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // Input configuration options:
  // data = input.required<Ticket>({alias:''});
  // data = input.required<Ticket>({transform:(value )=>{ return TransformedVlaue;}});
  // For output() => tehre is only one possiblity 'alias'
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output();


  onTOggleDetails(){
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((oldVal) =>!oldVal);
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
}
