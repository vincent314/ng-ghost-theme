import { Injectable } from '@angular/core';
import { Post } from './ghost.model';
import { Restangular } from 'ng2-restangular';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import 'showdown';
import * as Showdown from 'showdown';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class GhostService {

  private credentials = {'client_id': environment.api.clientId, 'client_secret': environment.api.clientSecret};

  private converter: Showdown.Converter;

  private imageUrlRegex = /src="(\/content\/images\/)(.*)"/g;

  constructor(private api: Restangular, private sanitizer:DomSanitizer) {
    this.converter = new Showdown.Converter();
  }

  getPosts(page:number): Observable<Post[]> {
    return this.api.one('posts').get(
      Object.assign({
        fields: 'id,uuid,slug,title,html,markdown,published_at',
        filters: 'status:published',
        limit: 10,
        page: page
      }, this.credentials)
    )
      .map(data => {
        const posts:Post[] = data.posts;

        posts.forEach((post:Post) => {
          let html:string;

          if(post.markdown){
            html = this.converter.makeHtml(post.markdown);
          } else {
            html = post.html;
          }

          post.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.fixImageUrl(html));
        });
        return posts;
      })
  }

  fixImageUrl(html:string){
    return html.replace(this.imageUrlRegex, `src="${environment.imageBaseUrl}$1$2"`);
  }

}
