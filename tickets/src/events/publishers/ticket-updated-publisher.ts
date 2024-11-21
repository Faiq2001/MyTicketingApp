import { Publisher, Subjects, TicketUpdatedEvent } from '@fa1q2001/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
