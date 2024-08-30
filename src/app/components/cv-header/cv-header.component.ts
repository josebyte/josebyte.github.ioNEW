import { Component, Input } from '@angular/core';
import { bootstrapPerson, bootstrapEnvelope, bootstrapTelephone, bootstrapGeoAlt, bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { DatePipe } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-cv-header',
  standalone: true,
  imports: [
    NgIcon,
    DatePipe,
    TranslateModule
  ],
  providers: [provideIcons({ bootstrapPerson, bootstrapEnvelope, bootstrapTelephone, bootstrapGeoAlt, bootstrapGithub, bootstrapLinkedin })],
  templateUrl: './cv-header.component.html',
  styleUrl: './cv-header.component.scss'
})
export class CvHeaderComponent {
  @Input() personalInformation: any;
  @Input() photo: string = '';
}
