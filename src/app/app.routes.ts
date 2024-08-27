import { Routes } from '@angular/router';
import { CvComponent } from "./containers/cv/cv.component";
import { PortfolioComponent } from "./containers/portfolio/portfolio.component";
import { RecommendationLettersComponent } from "./containers/recommendation-letters/recommendation-letters.component";

export const routes: Routes = [
  {
    path: '', redirectTo: '/cv', pathMatch: 'full'
  },
  {
    path: 'cv',
    component: CvComponent
    //canActivateChild: [AuthGuardLogged]
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
    //canActivateChild: [AuthGuardLogged]
  },
  {
    path: 'letters',
    component: RecommendationLettersComponent
    //canActivateChild: [AuthGuardLogged]
  }
];
