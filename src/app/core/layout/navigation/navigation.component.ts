import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { bootstrapFilePerson, bootstrapEasel, bootstrapHandThumbsUp } from '@ng-icons/bootstrap-icons';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    NgIcon
  ],
  providers: [provideIcons({ bootstrapFilePerson, bootstrapEasel, bootstrapHandThumbsUp })],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
