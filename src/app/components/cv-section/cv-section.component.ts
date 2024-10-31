import { Component, Input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [
    TranslateModule,
    DatePipe
  ],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss'
})
export class CvSectionComponent {
  @Input() section: any;

  getErrorImage(event: any){
    event.target.src = '/images/no-img.png';
  }
}
