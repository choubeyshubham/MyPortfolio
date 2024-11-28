import {Component} from '@angular/core';
import {NavLinksComponent} from "../shared/nav-links/nav-links.component";

@Component({
  selector: 'app-header',
  imports: [
    NavLinksComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
