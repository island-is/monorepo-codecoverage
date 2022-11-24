import { Injectable } from '@nestjs/common';
import {lib1} from "@my-workspace/lib1"

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: `Welcome to back1! => ${lib1()}` };
  }
}
