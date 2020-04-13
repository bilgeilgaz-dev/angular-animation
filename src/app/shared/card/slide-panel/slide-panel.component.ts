import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-slide-panel',
  templateUrl: './slide-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)', zIndex : '1' }),
      animate('400ms ease-in', style({transform: 'translateX(0%)', zIndex: '1'}))
    ]),
    transition(':leave', [
      style({zIndex : '1'}),
      animate('400ms ease-in', style({transform: 'translateX(-100%)'}))
    ])
  ])
]
})
export class SlidePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
