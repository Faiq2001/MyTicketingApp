import { Subjects, Publisher, OrderCancelledEvent } from '@fa1q2001/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
