import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RestangularModule } from 'ng2-restangular';
import { environment } from '../environments/environment';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

export function initRestangular(RestangularProvider) {
  RestangularProvider.setBaseUrl(environment.api.baseUrl);
}

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    RestangularModule.forRoot(initRestangular),
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
