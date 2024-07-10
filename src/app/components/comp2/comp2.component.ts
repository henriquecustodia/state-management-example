import { Component, inject } from "@angular/core";
import { StateStoreService } from "../../stores/state.service";

@Component({
  selector: "app-comp2",
  standalone: true,
  imports: [],
  template: `
    <p>State: {{ state() ?? "null" }}</p>
  `,
  styles: ``,
})
export class Comp2Component {
  stateStoreService = inject(StateStoreService);

  state = this.stateStoreService.getState();
}
