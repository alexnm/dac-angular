import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { AppComponentComponent } from './app-component/app-component.component'
import { ComponentComponent } from './component/component.component'
import { MarginComponent } from './margin/margin.component'
import { AppComponent1Component } from './app-component/app-component.component1'
import { Component1Component } from './component1/component1.component'
import { Component2Component } from './component2/component2.component'
import { Component3Component } from './component3/component3.component'
import { Component4Component } from './component4/component4.component'

@NgModule({
  declarations: [
    AppComponentComponent,
    ComponentComponent,
    MarginComponent,
    AppComponent1Component,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AppComponentComponent,
    ComponentComponent,
    MarginComponent,
    AppComponent1Component,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
  ],
})
export class ComponentsModule {}
