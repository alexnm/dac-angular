import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component1',
  templateUrl: 'component1.component.html',
  styleUrls: ['component1.component.css'],
})
export class Component1Component {
  @Input()
  src: string = 'https://play.teleporthq.io/static/img/default.png'
  @Input()
  src1: string = 'https://play.teleporthq.io/static/img/default.png'

  constructor() {}
}
