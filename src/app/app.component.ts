import { Component,Inject,LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translateService: TranslateService, @Inject(LOCALE_ID) private locale: string) { }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }
  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    // Set the locale for date and number formatting based on the default language
    if (this.locale === 'fr') {
      // Set the locale to French
      import('@angular/common/locales/fr').then(locale => {
        this.locale = 'fr-FR';
        registerLocaleData(locale.default);
      });
    } else if (this.locale === 'es') {
      // Set the locale to Spanish
      import('@angular/common/locales/es').then(locale => {
        this.locale = 'es-ES';
        registerLocaleData(locale.default);
      });
    } else {
      // Set the locale to the default language (English)
      import('@angular/common/locales/en').then(locale => {
        this.locale = 'en-US';
        registerLocaleData(locale.default);
      });
    }
  }
}
