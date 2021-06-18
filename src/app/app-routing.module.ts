import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { GeneralInformationComponent } from './pages/general-information/general-information.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';
import { SpareComponent } from './pages/spare/spare.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingPageComponent },
  {
    path: 'asset', component: TabComponent, children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'recommendation', component: RecommendationComponent },
      { path: 'spares', component: SpareComponent },
      { path: 'general-information', component: GeneralInformationComponent },
      { path: 'configuration', component: ConfigurationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
