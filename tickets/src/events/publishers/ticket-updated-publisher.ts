import { Publisher, Subjects, TicketUpdatedEvent } from '@fa1/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
