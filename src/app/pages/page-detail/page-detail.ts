import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cours } from '../../donnees/cours';
import { Catalogue } from '../../services/catalogue';
import { DetailCours } from '../../composants/detail-cours/detail-cours';

@Component({
  selector: 'app-page-detail',
  imports: [DetailCours, RouterLink],
  templateUrl: './page-detail.html',
  styleUrl: './page-detail.css',
})
export class PageDetail {
  private catalogue = inject(Catalogue);

  // Rempli automatiquement avec le :id de l'URL (c'est une chaîne de caractères)
  @Input() id = '';

  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
  }
}