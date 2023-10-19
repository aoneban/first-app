// truncate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, expanded: boolean): string {
    if (expanded) {
      return value;
    }
    if (value.length <= limit) {
      return value;
    }
    return value.split(' ', limit).slice(0, -1).join(' ') + '...';
  }
}
