import { Injectable } from '@nestjs/common';
import {lib1} from "../../../../libs/lib1/src/index"

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: `Welcome to back1! => ${lib1()}` };
  }
}
