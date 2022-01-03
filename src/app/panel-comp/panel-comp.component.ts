import { Component, OnInit } from '@angular/core';
import { Phrases } from '../shared/phrases.model';
import phrasesMock from './phrases.mock'

@Component({
  selector: 'app-panel-comp',
  templateUrl: './panel-comp.component.html',
  styleUrls: ['./panel-comp.component.sass']
})
export class PanelComponent implements OnInit {
  public mockecPhrases: Phrases[] = phrasesMock

  constructor() { console.log(this.mockecPhrases) }

  ngOnInit(): void {
  }

}
