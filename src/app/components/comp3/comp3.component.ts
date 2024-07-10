import { Component, inject, signal, Signal } from "@angular/core";
import { StateStoreService } from "../../stores/state.service";

@Component({
  selector: "app-comp3",
  standalone: true,
  imports: [],
  template: `
    <p>State Changes:</p>
    <ul>
      @for (item of changes(); track item) {
      <li>{{ item }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class Comp3Component {
  stateStoreService = inject(StateStoreService);

  changes = signal<string[]>([]);

  constructor() {
    this.stateStoreService.changes.subscribe((state) =>
      this.changes.update((v) => [...v, state ?? "null"])
    );
  }
}
