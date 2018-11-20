import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgLoopDirective } from './directives/ng-loop/ng-loop.directive';
import { CustomNgIfDirective } from './directives/custom-ng-if/custom-ng-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgLoopDirective,
    CustomNgIfDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
