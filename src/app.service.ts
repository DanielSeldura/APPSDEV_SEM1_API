import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'AppsDev Server - Non-Firebase Version for Frontend Testing';
  }
}
