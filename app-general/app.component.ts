import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  template: `
  <div>{{name | mike: 'Mada Saad'}}</div>  
  <div asaad="blue">{{name}}</div>  
  `
})
export class AppComponent {
  name = `Asaad Saad`

}
