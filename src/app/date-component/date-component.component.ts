import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-component',
  template: `<div>
    <p>Today is {{today }}</p>
    <p>Or if you prefer, {{today}}</p>
    <p>The time is {{today}}</p>
  </div>`
})
// Get the current date and time as a date-time value.
export class DatePipeComponent {
  today: number = Date.now();
  ngOnInit(): void {
  }
}