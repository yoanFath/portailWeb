import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pwe-ged-card',
  templateUrl: './ged-card.component.html',
  styleUrls: ['./ged-card.component.scss']
})
export class GedCardComponent implements OnInit {
  @Input()
  public file: File;
  constructor() { }

  ngOnInit() {
  }

}
