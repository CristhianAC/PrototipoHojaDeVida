import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsideService {
  opened = signal(false);


  toggle(){
    this.opened.set(!this.opened());
  }
  
}
