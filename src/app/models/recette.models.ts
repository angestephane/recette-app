export class RecetteModel {
  constructor(
    public reference : number,
    public designation : string,
    public description :  string,
    public ingredient : Array<string>,
    public level : string,
    public tempsCuisson : number,
  ) {}
}
