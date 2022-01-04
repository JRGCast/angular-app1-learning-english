import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.sass']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input() public totalHearts!: number

  @Input() public remainingAttempts!: number

  public allHearts: Array<Heart> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.allHearts = Array.from({ length: this.totalHearts }, () => new Heart(true))
    this.remainingAttempts = this.totalHearts
  }

  ngOnChanges(): void {
    if (this.allHearts.length > 0 && this.remainingAttempts !== this.allHearts.length) {
      try {
        let index = this.allHearts.length - this.remainingAttempts;
        this.allHearts[index - 1].fullOrNot = false
        
      } catch (error) {
        console.log(error)
      }

    }
  }
}
