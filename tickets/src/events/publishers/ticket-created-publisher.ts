import { Publisher, Subjects, TicketCreatedEvent } from '@fa1q2001/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
