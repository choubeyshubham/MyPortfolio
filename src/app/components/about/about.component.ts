import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  getExperienceYears(): number {
    const startDate = new Date(2021, 10); // Dec 2021
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const m = currentDate.getMonth() - startDate.getMonth();
    return m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate()) ? years - 1 : years;
  }

}
