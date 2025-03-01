import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Comp1Component } from "./components/comp1/comp1.component";
import { Comp2Component } from "./components/comp2/comp2.component";
import { Comp3Component } from "./components/comp3/comp3.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [Comp1Component, Comp2Component, Comp3Component],
  template: `
    <div class="container">
      <app-comp1 />
    </div>
    <div class="container">
      <app-comp2 />
    </div>

    <div class="container">
      <app-comp3 />
    </div>
  `,
  styles: [
    `
      .container {
        border: 1px solid red;
        padding: 16px;
        margin: 16px 0;
      }
    `,
  ],
})
export class AppComponent {}
