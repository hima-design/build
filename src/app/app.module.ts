import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbMenuModule,NbSidebarModule, NbLayoutModule, NbButtonModule,NbIconModule, NbSelectModule, NbTabComponent, NbTableModule, NbTabsetModule, NbCardModule, NbContextMenuModule, NbRouteTabsetModule, NbAccordionModule, NbToastrModule, NbProgressBarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { ThemeModule} from './@theme/theme.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { InputComponent } from './components/input/input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TableComponent } from './components/table/table.component';
import { TabComponent } from './components/tab/tab.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';
import { SpareComponent } from './pages/spare/spare.component';
import { GeneralInformationComponent } from './pages/general-information/general-information.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { AccordionComponent } from './components/accordion/accordion.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AssetComponent } from './pages/asset/asset.component';
import { HttpClientModule } from '@angular/common/http';
import { SiteOverviewComponent } from './pages/site-overview/site-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    LandingPageComponent,
    InputComponent,
    DropdownComponent,
    TableComponent,
    TabComponent,
    OverviewComponent,
    RecommendationComponent,
    SpareComponent,
    GeneralInformationComponent,
    ConfigurationComponent,
    ChartComponent,
    AccordionComponent,
    GoogleMapComponent,
    AssetComponent,
    SiteOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    ThemeModule,
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbSelectModule,
    NbTabsetModule,
    NbCardModule,
    NbContextMenuModule,
    NgxChartsModule,
    NbRouteTabsetModule,
    NbAccordionModule,
    NbToastrModule.forRoot(),
    GoogleMapsModule,
    NbProgressBarModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
