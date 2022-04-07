import { Component, OnInit } from '@angular/core';
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
        'omelette',
        'repas simple et facile à cuisiner',
        'faible',
        '10 minutes',
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
        'omelette',
        'repas simple et facile à cuisiner',
        'faible',
        '10 minutes',
        ['oignon', 'sel', 'bouillon', 'huile', 'poivre', 'piment']
      ),
    ];
  }

  ngOnInit(): void {}
}
