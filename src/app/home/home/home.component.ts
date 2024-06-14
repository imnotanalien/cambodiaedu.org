import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from "../home-navbar/home-navbar.component";
import { HomeFooterComponent } from "../home-footer/home-footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterOutlet, HomeNavbarComponent, HomeFooterComponent]
})
export class HomeComponent {

}
