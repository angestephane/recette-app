import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RecetteModel } from 'src/app/models/recette.models';


@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  data : string = './assets/datas/recette.json'

  constructor(private http : HttpClient) { }

  getData() : Observable<RecetteModel[]> {
    return this.http.get<RecetteModel[]>(this.data);
  }
}
