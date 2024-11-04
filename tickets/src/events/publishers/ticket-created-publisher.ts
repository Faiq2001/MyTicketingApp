import { Publisher, Subjects, TicketCreatedEvent } from '@fa1/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
