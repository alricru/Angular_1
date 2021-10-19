import { Component, OnInit } from '@angular/core';
import {Entree} from 'src/app/shared/interfaces/entree';
import {EntreeService} from 'src/app/shared/services/entree.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public entryList: any;
  constructor(private entreeService: EntreeService) { 
    this.entryList = [];
  }

  ngOnInit(): void {
    this.retrieveEntry();
  }

  private retrieveEntry(): void {
    this.entreeService.retrieveEntry().subscribe(
      (data) => {
        this.entryList = data;
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }
   

  public showTitle(nombre: string): void {
    alert(`Entrada seleccionada: ${ nombre }.`);
  }

}

