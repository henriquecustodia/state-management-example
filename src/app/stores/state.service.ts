import { Injectable, signal } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";

type StateValue = string | null;

@Injectable({
  providedIn: "root",
})
export class StateStoreService {
  #state = signal<StateValue>(null);

  changes = toObservable(this.#state);

  setState(v: StateValue) {
    if (!v) {
      v = null;
    }
    
    this.#state.set(v);
  }

  getState(): StateValue {
    return this.#state();
  }
}
