import { Component } from '@angular/core';
import { CvHeaderComponent } from "../../components/cv-header/cv-header.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CvHeaderComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

}
