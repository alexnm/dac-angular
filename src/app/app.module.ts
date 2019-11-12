import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page/page.module').then((m) => m.PageModule),
  },
  {
    path: 'page-renamed',
    loadChildren: () =>
      import('./pages/page-renamed/page-renamed.module').then((m) => m.PageRenamedModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
