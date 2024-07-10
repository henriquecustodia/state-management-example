import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StateStoreService } from "../../stores/state.service";

@Component({
  selector: "app-comp1",
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" placeholder="Digite um texto aqui" [(ngModel)]="state" />
    <button (click)="onChange()">Set State</button>
  `,
  styles: ``,
})
export class Comp1Component {
  state!: string;

  stateStoreService = inject(StateStoreService);

  onChange() {
    this.stateStoreService.setState(this.state);
  }
}
