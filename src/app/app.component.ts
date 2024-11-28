import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AboutComponent} from "./components/about/about.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Portfolio';
}
