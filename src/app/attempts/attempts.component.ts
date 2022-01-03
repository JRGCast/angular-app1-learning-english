import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.sass']
})
export class AttemptsComponent implements OnInit {
  public fullHeartSrc: string = 'https://cdn3.iconfinder.com/data/icons/retro-game-items/100/retro-11-512.png'
  public fullHeartAltText: string = 'full-heart-icon'
  public emptyHeartSrc: string = 'https://cdn3.iconfinder.com/data/icons/retro-game-items/100/retro-12-512.png'
  public emptyHeartAltText: string = 'empty-heart-icon'

  constructor() { }

  ngOnInit(): void {
  }

}
