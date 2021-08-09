import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {

  async checkout(body: any, res: any) {
    // const = ctx.request.body.prices.reduce((a,b)=>a+b,0)
    // const names = body.name;
    // if (names.length === 0) {
    //   return res.send('error', 402);
    // }
    // const price = names
    //   .map((item) => this.productsData[item])
    //   .reduce((a, b) => a + b, 0);
    // const session = await this.stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: [
    //     {
    //       price_data: {
    //         currency: 'pln',
    //         product_data: {
    //           name: 'Apple Product',
    //         },
    //         unit_amount: price,
    //       },
    //       quantity: 1,
    //     },
    //   ],
    //   mode: 'payment',
    //   success_url: 'http://localhost:3000/confirmed',
    //   cancel_url: 'http://localhost:3000/cart',
    // });
    // return res.send(session.url);
  }
}
