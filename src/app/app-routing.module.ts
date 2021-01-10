import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasicsReviewComponent } from './basics-review/basics-review.component';
import { DataBindingComponent } from './basics-review/data-binding/data-binding.component';
import { DirectivesComponent } from './basics-review/directives/directives.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { HomeComponent } from './home/home.component';
import { ServicesSectionComponent } from './services-section/services-section.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  {
    path: 'basics-review',
    component: BasicsReviewComponent,
  },
  { path: 'basics-review/data-binding', component: DataBindingComponent },
  { path: 'basics-review/directives', component: DirectivesComponent },
  { path: 'custom-events', component: CustomEventsComponent },
  { path: 'services-section', component: ServicesSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
