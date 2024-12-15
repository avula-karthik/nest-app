import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Currently having v1 version ! Hello from Beanstalk';
  }
}
