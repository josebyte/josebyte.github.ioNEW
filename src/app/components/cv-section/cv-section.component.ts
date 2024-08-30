import { Component, Input } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.scss'
})
export class CvSectionComponent {
  @Input() section: any;
}
