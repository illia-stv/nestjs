import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { DatasModule } from './data/data.module';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';
import Stripe from 'stripe';

@Module({
  imports: [
    CatsModule,
    AuthModule,
    UsersModule,
    DatasModule,
    PaymentModule,
    PaymentService,
    Stripe,
  ],
  controllers: [AppController],
  providers: [PaymentService, Stripe],
  exports: [PaymentService, Stripe],
})
export class AppModule {}
