import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'page-renamed',
  templateUrl: 'page-renamed.component.html',
  styleUrls: ['page-renamed.component.css'],
})
export class PageRenamedComponent {
  constructor(private title: Title) {
    this.title.setTitle('dac')
  }
}
