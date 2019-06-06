import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { BackRoutingModule } from './back-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    CommonModule,
    BackRoutingModule
  ],
  exports: [IndexComponent]
})
export class BackModule { }
