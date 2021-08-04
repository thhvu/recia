import { EtablissementsService } from './../../services/etablissements/etablissements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent implements OnInit {

  etablissements: any = [];
  dtOptions: any = {};
  afficherTable: any;

  constructor(private service: EtablissementsService) { }

  ngOnInit(): void {
    this.getDataFromSource();
  }

  getDataFromSource() {
    this.service
      .etablissements()
      .subscribe((response: any[]) => {
        this.etablissements = response;
        this.dtOptions = {
          data: this.etablissements,
          columns: [{
            title: 'Siren',
            data: 'entstructuresiren'
          }, {
            title: 'Nom',
            data: 'entstructurenomcourant'
          }, {
            title: 'Type',
            data: 'entstructuretypestruct'
          }, {
            title: 'Context',
            data: 'context',
            defaultContent: ''
          }, {
            title: 'Boîte postale',
            data: 'postofficebox',
            defaultContent: ''
          }, {
            title: 'Adresse',
            data: 'street',
            defaultContent: ''
          }, {
            title: 'Téléphone',
            data: 'telephonenumber',
            defaultContent: ''
          }, {
            title: 'Cedex',
            data: 'l',
          }, {
            title: 'Code UAI',
            data: 'entstructureuai',
          }, {
            title: 'Fascimile Téléphone',
            data: 'facsimiletelephonenumber',
            defaultContent: ''
          }, {
            title: 'Code postal',
            data: 'postalcode',
          }],
          responsive: true
        };
        this.afficherTable = true;
      });
  }
}
