import { SafeHtml } from '@angular/platform-browser';
export interface Post {
  title?:string;
  slug?:string;
  markdown?:string;
  html?: string;
  safeHtml?: SafeHtml;
}
