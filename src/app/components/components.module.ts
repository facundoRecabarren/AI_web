import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TopBarComponent } from './top-bar/top-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    TopBarComponent,
    MainMenuComponent
  ],
  exports: [
    TopBarComponent,
    MainMenuComponent
  ]
})
export class AppModule { }
