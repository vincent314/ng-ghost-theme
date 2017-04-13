import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestangularModule } from 'ng2-restangular';
import { environment } from '../environments/environment';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { HeaderComponent } from './components/header/header.component';

export function initRestangular(RestangularProvider) {
  RestangularProvider.setBaseUrl(environment.api.baseUrl);
}

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    RestangularModule.forRoot(initRestangular),
    InfiniteScrollModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
