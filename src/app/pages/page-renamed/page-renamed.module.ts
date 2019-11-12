import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { PageRenamedComponent } from './page-renamed.component'

const routes = [
  {
    path: '',
    component: PageRenamedComponent,
  },
]

@NgModule({
  declarations: [PageRenamedComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [PageRenamedComponent],
})
export class PageRenamedModule {}
