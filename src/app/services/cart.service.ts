// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private localCartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public localCart$: Observable<any[]> = this.localCartSubject.asObservable();

  constructor() {
    this.loadLocalCart();
  }

  private loadLocalCart() {
    const localCartString = localStorage.getItem('localCart');
    const localCart = localCartString ? JSON.parse(localCartString) : [];
    this.localCartSubject.next(localCart);
  }

  public getCount(): Observable<number> {
    return this.localCart$.pipe(map(cart => cart.length)); 
  }
}
