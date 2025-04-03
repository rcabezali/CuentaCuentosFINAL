import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'difficultyStars'
})
export class DifficultyStarsPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(difficulty: number): SafeHtml {
    const max = 5;
    const filled = '⭐'.repeat(Math.min(difficulty, max));
    const empty = '☆'.repeat(Math.max(max - difficulty, 0));
    return this.sanitizer.bypassSecurityTrustHtml(filled + empty);
  }
}
