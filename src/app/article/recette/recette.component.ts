import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecetteModel } from 'src/app/models/recette.models';

@Component({
  selector: 'recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css'],
})
export class RecetteComponent implements OnInit {
  @Input() recette  : RecetteModel = new RecetteModel(0, '', '', [], '', 0)

  @Output() onRecetteSelected: EventEmitter<RecetteModel>;
  constructor() {
    this.onRecetteSelected = new EventEmitter();
  }

  RecetteWasSelected(recette: RecetteModel): void {
    this.onRecetteSelected.emit(recette);
  }

  ngOnInit(): void {}
}
