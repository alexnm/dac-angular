import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-page',
  templateUrl: 'page.component.html',
  styleUrls: ['page.component.css'],
})
export class PageComponent {
  constructor(private title: Title) {
    this.title.setTitle('dac')
  }
}
