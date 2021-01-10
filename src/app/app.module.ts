import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicsReviewComponent } from './basics-review/basics-review.component';
import { DataBindingComponent } from './basics-review/data-binding/data-binding.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './basics-review/directives/directives.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { ChildComponentComponent } from './custom-events/child-component/child-component.component';
import { ServicesSectionComponent } from './services-section/services-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsReviewComponent,
    DataBindingComponent,
    HomeComponent,
    DirectivesComponent,
    FooterComponent,
    CustomEventsComponent,
    ChildComponentComponent,
    ServicesSectionComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
