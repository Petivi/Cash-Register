import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  normalizeString(string: string){
    if(!string) string = '';
    string = string.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return string;
  }
}
