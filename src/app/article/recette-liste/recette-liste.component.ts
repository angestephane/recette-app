import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recette } from 'src/app/recette.module';

@Component({
  selector: 'recette-liste',
  templateUrl: './recette-liste.component.html',
  styleUrls: ['./recette-liste.component.css'],
})
export class RecetteListeComponent implements OnInit {
  recettes: Array<Recette>;

  constructor() {
    this.recettes = [
      new Recette(
        'Riz au poulet',
        'repas simple et facile à cuisiner',
        'difficile',
        '1 heure',
        ['oignon', 'sel', 'bouillon', 'huile', 'poivre', 'piment']
      ),
      new Recette(
        'omelette',
        'repas simple et facile à cuisiner',
        'faible',
        '10 minutes',
        ['oignon', 'sel', 'bouillon', 'huile', 'poivre', 'piment']
      ),
      new Recette(
        'Ragout au petit poids',
        'repas simple et facile à cuisiner',
        'moyen',
        '45 minutes',
        ['oignon', 'sel', 'bouillon', 'huile', 'poivre', 'piment']
      ),
    ];
  }

  getRecetteSelected(recette: Recette): void {
    console.log('Recette selectionnée est : ', recette);
  }

  ngOnInit(): void {}
}
