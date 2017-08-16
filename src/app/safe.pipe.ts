import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitazer: DomSanitizer) { }

  transform(url: any) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }

}
