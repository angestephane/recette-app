import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../../recette.module';

@Component({
  selector: 'recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css'],
})
export class RecetteComponent implements OnInit {
  @Input() recette: Recette = new Recette('', '', '', '', []);
  constructor() {}

  ngOnInit(): void {}
}
