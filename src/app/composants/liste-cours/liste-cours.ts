import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { Cours, COURS } from '../../donnees/cours';

@Component({
  imports: [FormsModule, RouterLink, FiltreCoursPipe, TriCoursPipe, UpperCasePipe, PlacesRestantesPipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCours {
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';

  cours: Cours[] = COURS;
}