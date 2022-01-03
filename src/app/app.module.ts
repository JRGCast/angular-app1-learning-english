import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './topBar/topBar.component';
import { LearningComponentComponent } from './learning-component/learning-component.component';
import { PanelComponent } from './panel-comp/panel-comp.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { ProgressComponent } from './progress/progress.component';
import { DatePipeComponent } from './date-component/date-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    LearningComponentComponent,
    PanelComponent,
    AttemptsComponent,
    ProgressComponent,
    DatePipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
