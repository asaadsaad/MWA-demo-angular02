import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mike',
  pure: false,
})
export class MikePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return JSON.stringify({ name: 'whatever' });
  }

}
