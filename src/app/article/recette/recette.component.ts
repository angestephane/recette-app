import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recette } from '../../recette.module';

@Component({
  selector: 'recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css'],
})
export class RecetteComponent implements OnInit {
  @Input() recette: Recette = new Recette('', '', '', '', []);

  @Output() onRecetteSelected: EventEmitter<Recette>;
  constructor() {
    this.onRecetteSelected = new EventEmitter();
  }

  RecetteWasSelected(recette: Recette): void {
    this.onRecetteSelected.emit(recette);
  }

  ngOnInit(): void {}
}
