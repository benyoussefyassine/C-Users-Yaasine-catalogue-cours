import { Component } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EnTete, ListeCours, PiedPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogue-cours';
}