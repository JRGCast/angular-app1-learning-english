import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.sass']
})
export class ProgressComponent implements OnInit {

 @Input() public theProgress: number = 0

  constructor() {

  }

  ngOnInit(): void {
  }

  public nextPhase(): void {
    this.theProgress += 25
  }

}
