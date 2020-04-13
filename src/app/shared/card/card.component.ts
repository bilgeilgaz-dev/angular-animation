import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

declare const drawChart: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '250px',
      })),
      state('closed', style({
        height: '50px',

      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
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
export class CardComponent implements OnInit {

  public isOpen = false;
  public stateToggle = 'hidden';
  public showMask: Boolean;
  public isSlide = false;


  constructor() { }

  ngOnInit(): void {
    this.showMask =false;

    drawChart();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  slide() {
    this.isSlide = !this.isSlide;
  }

}
