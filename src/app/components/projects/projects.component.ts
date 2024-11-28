import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Firebase'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/choubeyshubham/portfolio_2',
    },
    {
      name: 'Beer Rest Api',
      description: 'Beer Works - RESTful Brewery Service? Dive into the code of this project, built with Java, and Spring Boot, to see a List of Beer Order.',
      technologies: [ 'Java', 'Spring Boot', 'MySQL Database'],
      src: './assets/projects/beer.jpg',
      link: 'https://github.com/choubeyshubham/spring-6-rest-mvc',
    },
    {
      name: 'Ecommerce',
      description: 'Monorepo of the Ecommerce platform app.This project integrates both frontend and backend development, using Java 17 with Spring Boot 3 for server-side logic and Angular 18 as user interface, styled with DaisyUI and Docker',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Bootstrap', 'FontAwesome','Docker'],
      src: './assets/projects/ecommerce.png',
      link: 'https://github.com/choubeyshubham/ecommerce',
    }
  ];
}
