import { Component } from '@angular/core';
import { CalculatorNavbarComponent } from "../calculator-navbar/calculator-navbar.component";
import { CalculatorSidebarComponent } from "../calculator-sidebar/calculator-sidebar.component";

@Component({
    selector: 'app-calculator',
    standalone: true,
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss',
    imports: [CalculatorNavbarComponent, CalculatorSidebarComponent]
})
export class CalculatorComponent {

}
