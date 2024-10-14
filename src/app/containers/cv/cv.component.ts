import { Component } from '@angular/core';
import { CvHeaderComponent } from "../../components/cv-header/cv-header.component";
import { TranslateModule } from "@ngx-translate/core";
import { Book } from "../../core/models/Book";
import { Course } from "../../core/models/Course";
import CV from '../../../../public/jsonCV/cvES.json';
import BooksJoseba from '../../../../public/jsonCV/booksES.json';
import CoursesJoseba from '../../../../public/jsonCV/coursesES.json';
import {CvSectionComponent} from "../../components/cv-section/cv-section.component";
import cv from "../../../../public/jsonCV/cvES.json";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CvHeaderComponent,
    TranslateModule,
    CvSectionComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  sections: any[];

  cv = CV;
  books: Book[] = BooksJoseba;
  courses: Course[] = CoursesJoseba;

  constructor(
  ) {
    this.sections = [
      {name: 'educationTrainings', items: this.cv.profile.educationTrainings},
      {name: 'complementaryTrainings', items: this.courses},
      {name: 'complementaryTrainings', items: this.books},
      {name: 'workExperiences', items: this.cv.profile.workExperiences},
      {name: 'organisationalSkills', items: this.cv.profile.organisationalSkills}
    ];
  }
}
