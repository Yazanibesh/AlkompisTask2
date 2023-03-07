import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    // Register the default locale data
    import('@angular/common/locales/en').then(locale => {
      registerLocaleData(locale.default);
      registerLocaleData(localeFr);
      registerLocaleData(localeEs);
    });
  }
}
