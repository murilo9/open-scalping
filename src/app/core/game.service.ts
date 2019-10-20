import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private newGameSubject = new Subject<void>();
  public newGameCalled$ = this.newGameSubject.asObservable();

  constructor() { }

  public callNewGame(){
    this.newGameSubject.next();
  }
}
