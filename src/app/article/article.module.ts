import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteComponent } from './recette/recette.component';
import { RecetteListeComponent } from './recette-liste/recette-liste.component';

//PrimeNg modules
//PrimeNg import modules
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [RecetteComponent, RecetteListeComponent],
  imports: [CommonModule, ChipModule, ButtonModule],
  exports: [RecetteListeComponent],
})
export class ArticleModule {}
