import { NbJSThemeOptions } from '@nebular/theme';

export const SIEMENS_THEME = {
  name: 'siemens',
  base: 'corporate',
  variables: {
      operationalEfficiency: {
          colors: {
              inputConsumption: '#ffffff',
              warn: '#ffffff',
              fail: '#ff0000'
          }
      }
  }
} as NbJSThemeOptions;
