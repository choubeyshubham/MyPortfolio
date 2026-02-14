import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/choubeyshubham/', '_blank');
  }
//sebastiano-fazzino
  get email(): string {
    return 'shubhamchoubeymv@gmail.com';
  }
}
