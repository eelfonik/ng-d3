import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VizConsoleService {
  public colorInputChanged$: Subject<string> = new Subject<string>();

  emitColorInputChangesVal(val) {
     this.colorInputChanged$.next(val);
  }
  constructor() { }
}
