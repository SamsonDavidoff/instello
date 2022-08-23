import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const commentRoutes: Routes = []

@NgModule({
  imports: [RouterModule.forChild(commentRoutes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
