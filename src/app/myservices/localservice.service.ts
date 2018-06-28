import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalserviceService {

  sweets = ['rosogolla', 'gulab jamun'];

  constructor() { }

  getLocalSweets() {
    console.log('These are local sweets')
    console.log(this.sweets.toString());    
  }
}
