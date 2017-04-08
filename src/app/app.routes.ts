import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {path: 'posts', component: PostsComponent},
];
