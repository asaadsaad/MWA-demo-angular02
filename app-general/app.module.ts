import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AsaadDirective } from './asaad.directive';
import { MikePipe } from './mike.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AsaadDirective,
    MikePipe,
  ],
  // to use Forms we must have FormsModule OR ReactiveFormsModule Here
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
