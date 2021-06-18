import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbRouteTabsetModule,
  NbTabsetModule,
  NbThemeModule,
  NbCardModule,
  NbInputModule,
  NbSpinnerModule,
  NbTooltipModule,
  NbDatepickerModule,
  NbCheckboxModule,
  NbStepperComponent,
  NbStepperModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { SIEMENS_THEME } from './styles/theme.siemens';
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbCardModule,
  NbInputModule,
  PortalModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTooltipModule,
  NbIconModule,
  NbEvaIconsModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbDatepickerModule,
  NbCheckboxModule,
  NbStepperModule
];

@NgModule({
  imports: [
    
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
    // TagInputModule,
    ...NB_MODULES,
  ],
  exports: [CommonModule],
  entryComponents: [],
  providers: [
    ...NbThemeModule.forRoot(
      {
        name: 'siemens',
      },
      [
        SIEMENS_THEME,
      ],
    ).providers
    ],
})
export class ThemeModule {}
