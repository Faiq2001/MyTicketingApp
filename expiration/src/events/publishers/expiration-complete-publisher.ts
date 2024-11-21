import { Subjects, Publisher, ExpirationCompleteEvent } from '@fa1q2001/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
