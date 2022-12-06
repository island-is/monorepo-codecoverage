import { Injectable } from '@nestjs/common';
import {lib1} from "@my-workspace/lib1"

@Injectable()
export class AppService {
  getData(): { message: string } {
    const a = lib1()
    return { message: `Welcome to back1! => ${a}` };
  }
}
