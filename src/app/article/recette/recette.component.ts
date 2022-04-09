import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recette } from '../../recette.module';

@Component({
  selector: 'recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css'],
})
export class RecetteComponent implements OnInit {
  @Input() recette: Recette = new Recette('', '', '', '', []);
  //@Output() onRecetteElected: EventEmitter<Recette>;
  constructor() {}

  getProductSelected(recette: Recette) {
    console.log('Recette selectionnée', recette);
  }

  ngOnInit(): void {}
}
