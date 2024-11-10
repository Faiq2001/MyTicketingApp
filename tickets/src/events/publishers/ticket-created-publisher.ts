import { Publisher, Subjects, TicketCreatedEvent } from '@fa1q2001/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
