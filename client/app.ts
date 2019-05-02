import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/modules';
import { enableProdMode } from '@angular/core';

import './styles.scss'

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
