import { Component, Input, ChangeDetectionStrategy, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>Child Component: {{person.name}} lives at {{person.zipcode}}, Address: {{address}} </p>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnChanges {
  @Input() person: { name: string, zipcode: string } = { name: '', zipcode: '' };
  address: string = '';

  constructor() {
    // Input value is not available in the constructor
    // console.info({ 'Constructor Input Value': this.person }) // undefined
  }
  ngOnInit() {
    // Input value is available here onward to all component lifecycle hooks
    // Locating the address should be here, not in the constructor(), because it depends on the Input value
    // console.info({ 'ngOnInit Input Value': this.person })
    this.address = this.locateAddress(this.person.zipcode);
  }
  // ngOnChanges is triggered every time the Input value changes (Only when JS allocate new memory address, not by mutation)
  ngOnChanges(change: SimpleChanges) {
    if (change) {
      console.log(`Change detected, ngOnchanges() Triggered, Locating Address...`)
      this.address = this.locateAddress(this.person.zipcode);
    }
  }
  locateAddress(zipcode: string) {
    return this.randomAddress()
  }

  randomAddress() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

}
