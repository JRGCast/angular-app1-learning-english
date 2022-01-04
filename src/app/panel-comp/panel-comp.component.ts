import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Phrases } from '../shared/phrases.model';
import phrasesMock from './phrases.mock'

@Component({
  selector: 'app-panel-comp',
  templateUrl: './panel-comp.component.html',
  styleUrls: ['./panel-comp.component.sass']
})
export class PanelComponent implements OnInit {
  public currPhase: number = 1;
  public mockedPhrases: Phrases[] = phrasesMock;
  public currEnPhrase: string = ''
  public currPtPhrase: string = ''
  public currAnswer: string = '';
  public currProgress: number = 0
  public totalAttempts: number = 6
  public remainingAttempts: number = this.totalAttempts
  @Output() public finishGamePanel: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.updatePhrases()
  }

  ngOnInit(): void {
  }

  public getAnswer(answer: Event | null): void {
    this.currAnswer = ((<HTMLInputElement>answer?.target)?.value)
  }


  public compareAnswer(): void {
    if (this.currEnPhrase && this.currAnswer === this.currPtPhrase) {
      this.finishTheGame()
      console.log('ACERTÔ MISERÁVIL')
      this.currPhase += 1
      this.updatePhrases()
      this.currProgress += (100 / 4)
    } else {
      console.log('Errou burro!')
      this.finishTheGame()
      this.remainingAttempts -= 1
      this.currAnswer = ''
    }
  }

  public updatePhrases(): void {
    this.currEnPhrase = this.mockedPhrases[this.currPhase - 1]?.phraseEnglish
    this.currPtPhrase = this.mockedPhrases[this.currPhase - 1]?.phrasePortuguese
    this.currAnswer = ''
  }

  public finishTheGame(): void {
    if (this.currPhase > this.mockedPhrases.length - 1) this.finishGamePanel.emit('Victorious')
    if (this.remainingAttempts <= 1) this.finishGamePanel.emit('Defeated')
  }
}
