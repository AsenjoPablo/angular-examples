import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicsReviewComponent } from './basics-review/basics-review.component';
import { DataBindingComponent } from './basics-review/data-binding/data-binding.component';
import { DirectivesComponent } from './basics-review/directives/directives.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'basics-review', component: BasicsReviewComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directives', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
