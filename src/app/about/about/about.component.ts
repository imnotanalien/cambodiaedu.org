import { Component } from '@angular/core';
import { AboutNavbarComponent } from "../about-navbar/about-navbar.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [AboutNavbarComponent]
})
export class AboutComponent {

}
