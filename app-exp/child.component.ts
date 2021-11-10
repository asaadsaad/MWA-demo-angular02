import { Component, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Child data: {{data.name}}</p>
  `
})
export class ChildComponent implements AfterViewChecked {
  @Input('data') data: { name: string } = { name: '' };

  ngAfterViewChecked() {
    this.data.name = "Mike";
    // setTimeout(() => { this.data.name = "Mike"; });

  }
}
