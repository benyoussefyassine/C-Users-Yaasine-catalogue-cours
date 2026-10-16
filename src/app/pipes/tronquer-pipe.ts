import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tronquer' })
export class TronquerPipe implements PipeTransform {
  transform(texte: string, max: number = 20): string {
    if (texte.length <= max) return texte;
    return texte.slice(0, max) + '…';
  }
}