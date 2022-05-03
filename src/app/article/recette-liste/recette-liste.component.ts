import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {RecetteModel} from 'src/app/models/recette.models';
import { RecetteService } from 'src/app/shared/services/recette.service';

@Component({
  selector: 'recette-liste',
  templateUrl: './recette-liste.component.html',
  styleUrls: ['./recette-liste.component.css'],
})
export class RecetteListeComponent implements OnInit {
  recettes: Array<RecetteModel> = [];

  constructor(private serviceRecette : RecetteService) {}

  ngOnInit () : void{
    this.serviceRecette.getData().subscribe({
      next : (recette) => (
        this.recettes = recette, console.log(this.recettes)),
      error : (err) => (console.log("erreur de chargement des données"))
    })
  }

  getRecetteSelected(recette: RecetteModel): void {
    console.log('Recette selectionnée est : ', recette);
  }

}
