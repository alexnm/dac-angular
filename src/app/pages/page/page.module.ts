import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { PageComponent } from './page.component'

const routes = [
  {
    path: '',
    component: PageComponent,
  },
]

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [PageComponent],
})
export class PageModule {}
