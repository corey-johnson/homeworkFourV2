import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  animeLists: any = [
          {
              animeListHeaders: "Action",
              animeListItems: [
                  {animeListItem: "Fullmetal Alchemist"},
                  {animeListItem: "Naruto"},
                  {animeListItem: "Cowboy Bebop"},
                  {animeListItem: "Bleach"},
                  {animeListItem: "Samurai Champloo"}
              ]
          },

          {
              animeListHeaders: "Mecha",
              animeListItems: [
                  {animeListItem: "Gurren Lagann"},
                  {animeListItem: "Neon Genesis Evangelion"},
                  {animeListItem: "Code Geass"},
                  {animeListItem: "Gundam SEED"},
                  {animeListItem: "Macross"}
              ]
          },

          {
              animeListHeaders: "Romance",
              animeListItems: [
                  {animeListItem: "The Irregulars ar Magic High School"},
                  {animeListItem: "Chobits"},
                  {animeListItem: "Btooom!"},
                  {animeListItem: "Ai Yori Aoshi"},
                  {animeListItem: "Durarara!!"}
              ]
          }
      ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

    // getData():Object {
    //     return this.animeLists.animeListItems;
    // }

}
