import {Injectable} from '@nestjs/common';
import {lib2} from "@my-workspace/lib2"

@Injectable()
export class AppService {
  getData(): { message: string, message2: string } {
    const a = 'lib1'
    return {message: `Welcome to back1! => ${a}`, message2: lib2()};
  }
}
