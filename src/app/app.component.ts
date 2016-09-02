import { Component } from '@angular/core';
import { UIROUTER_DIRECTIVES } from 'ui-router-ng2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [UIROUTER_DIRECTIVES]
})
export class AppComponent {
  
}
