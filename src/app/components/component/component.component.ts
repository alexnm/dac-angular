import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component',
  templateUrl: 'component.component.html',
  styleUrls: ['component.component.css'],
})
export class AppComponentComponent {
  @Input()
  headingle1: string = 'Heading Level 1'

  constructor() {}
}
