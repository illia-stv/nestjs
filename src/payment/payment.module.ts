import { Module } from '@nestjs/common';
import Stripe from 'stripe';
import { PaymentService } from './payment.service';

@Module({
  providers: [Stripe, PaymentService],
  imports: [Stripe, PaymentService],
  exports: [Stripe, PaymentService],
})
export class PaymentModule {}
