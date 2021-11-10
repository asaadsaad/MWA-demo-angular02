import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <p>App Component:  {{person.name}} lives at {{person.zipcode}}
      <button (click)="changeZipcode_By_Mutation()">Change zipcode By Mutation</button>&nbsp;
      <button (click)="changeZipcode_Without_Mutation()">Change zipcode Without Mutation</button>
    </p>
    <hr />
    <app-child [person]="person"></app-child>
  `
})
export class AppComponent {
  person = { name: "Asaad Saad", zipcode: '52557' }

  changeZipcode_By_Mutation() {
    this.person.zipcode = this.randomZip()
    console.log(`Mutating person zipcode: ${this.person.zipcode}`)
  }

  changeZipcode_Without_Mutation() {
    this.person = Object.assign({}, this.person, { zipcode: this.randomZip() })
    console.log(`Create new person object: ${this.person.zipcode}`)
  }

  randomZip() {
    return Math.floor(Math.random() * Math.floor(99999)).toString()
  }
}
