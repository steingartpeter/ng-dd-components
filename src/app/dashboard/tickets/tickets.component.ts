import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  // onCloseTicket(arg0: string) {
  // throw new Error('Method not implemented.');
  // }
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onClose(id: string){
    this.tickets = this.tickets.map((tckt) => {
      if(tckt.id === id){
        //tckt.status = 'closed';
        return {...tckt, status:'closed'};
      }
      return tckt;
    })
  }
}
