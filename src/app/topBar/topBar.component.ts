import { Component } from '@angular/core'
// const color = 'red'

@Component({
  selector: 'app-topBar',
  templateUrl: './topBar.component.html',

  styleUrls: ['./topBar.component.sass']
})
export class TopComponent {
  public date = new Date().toLocaleString('pt-BR')
  constructor() {
    setInterval(() => {
      this.date = new Date().toLocaleString('pt-BR')
    }, 1000)
  }

  ngOnInit(): void {
  }
}