import { Component } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours, Cours } from './composants/liste-cours/liste-cours';
import { DetailCours } from './composants/detail-cours/detail-cours';
import { PiedPage } from './composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnTete, ListeCours, DetailCours, PiedPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  coursSelectionne: Cours | null = null;

  onSelectionCours(c: Cours) {
    this.coursSelectionne = c;
  }
}