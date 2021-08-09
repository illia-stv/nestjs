import {
  Controller,
  Get,
  Request,
  Response,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './dto/create-users';
import { CreatePaymentDto } from './dto/create-payment';
import { UsersService } from './users/users.service';
import { DataService } from './data/data.service';
import { PaymentService } from './payment/payment.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private dataService: DataService,
    private paymentService: PaymentService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/register')
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  // @Post('checkout')
  // async checkout(
  //   @Body() createPaymentDto: CreatePaymentDto,
  //   @Response() res: any,
  // ) {
  //   this.paymentService.checkout(createPaymentDto, res);
  // }

  @Get('get-users')
  async getUsers(@Response() res) {
    this.usersService.getUsers(res);
  }

  @Get('get-categories')
  async getCategories(@Response() res) {
    this.dataService.getCategories(res);
  }

  @Get('get-under-categories')
  async getUnderCategories(@Response() res) {
    this.dataService.getUnderCategories(res);
  }

  @Get('get-products')
  async getProducts(@Response() res) {
    this.dataService.getProducts(res);
  }
}
