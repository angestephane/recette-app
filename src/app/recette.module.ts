export class Recette {
  constructor(
    public nom: string,
    public description: string,
    public difficulte: string,
    public tempsCuisson: string,
    public ingredient: Array<String>
  ) {}
}
