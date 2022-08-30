import { NgModule } from '@angular/core';

import { TopBarComponent } from './top-bar/top-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FakeCursorComponent } from './fake-cursor/fake-cursor.component';

@NgModule({
  declarations: [
    TopBarComponent,
    MainMenuComponent,
    FakeCursorComponent
  ],
  exports: [
    TopBarComponent,
    MainMenuComponent,
    FakeCursorComponent
  ]
})
export class ComponentsModule { }
