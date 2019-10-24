import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewGameForm } from './NewGameForm';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private newGameSubject = new Subject<Object>();
  public newGameCalled$ = this.newGameSubject.asObservable();

  constructor() { }

  public callNewGame(form: NewGameForm){
    this.newGameSubject.next(form);
  }
}
