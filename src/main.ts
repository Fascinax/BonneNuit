import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {AppRootComponent} from './app/pages/main-page/main-page.component';


bootstrapApplication(AppRootComponent, appConfig)
  .catch((err) => console.error(err));
