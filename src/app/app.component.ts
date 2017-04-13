import { Component } from '@angular/core';
import { GhostService } from './services/ghost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GhostService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';

}
