import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FeedPageComponent } from "@core/pages/feed-page/feed-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeedPageComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
