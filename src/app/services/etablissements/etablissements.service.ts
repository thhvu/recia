import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtablissementsService {

  constructor(private http: HttpClient) { }

  etablissements() {
    return this.http.get<any>('https://ent.recia.fr/esco-apps-redirector/getInfosJson.php');
  }
}
