import { Subjects, Publisher, PaymentCreatedEvent } from '@fa1q2001/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
