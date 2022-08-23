import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from "@core/core-routing.module";

import { DefaultLayoutComponent } from './layouts/default/default-layout/default-layout.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { LayoutHeaderComponent } from "@core/layouts/default/layout-header/layout-header.component";

@NgModule({
  declarations: [
    // AboutPageComponent,
    // NotfoundPageComponent,
    // DefaultLayoutComponent,
    // LayoutHeaderComponent,
    // LayoutFooterComponent,
    // LayoutSidebarComponent,
    // PageHeaderCardComponent

    DefaultLayoutComponent,
    FeedPageComponent,
    LayoutHeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class CoreModule {
}
