import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public gameOn: boolean = true
  public gameFinishedPhrase: string = ''
  constructor() { }

  public redoGame(): void {
    this.gameOn = true
    this.gameFinishedPhrase = ''
  }

  public finishGameApp(victoryOrDefeat: string): void {
    this.gameFinishedPhrase = victoryOrDefeat
    this.gameOn = false
  }
}
