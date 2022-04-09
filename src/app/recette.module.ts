export class Recette {
  constructor(
    public nom: string,
    public description: string,
    public level: string,
    public tempsCuisson: string,
    public ingredient: Array<String>
  ) {}
}
