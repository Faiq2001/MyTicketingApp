import { Publisher, OrderCreatedEvent, Subjects } from '@fa1q2001/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
