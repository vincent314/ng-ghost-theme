import { Component, OnInit } from '@angular/core';
import { GhostService } from '../../services/ghost.service';
import { Post } from '../../services/ghost.model';
import * as _ from 'lodash';

@Component({
  styleUrls: [
    './posts.component.scss'
  ],
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  page = 1;

  constructor(private ghostService: GhostService) {
  }

  ngOnInit(): void {
    this.onScroll();
  }

  onScroll() {
    this.ghostService.getPosts(this.page)
      .subscribe(posts => {
        this.posts = _.sortBy(this.posts.concat(posts), '-published_at');
        this.page++;
      });
  }
}
