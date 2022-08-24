import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from "@core/core-routing.module";

import { DefaultLayoutComponent } from '@core/layouts/default/default-layout/default-layout.component';
import { LayoutHeaderComponent } from "@core/layouts/default/layout-header/layout-header.component";
import { LayoutSidebarComponent } from "@core/layouts/default/layout-sidebar/layout-sidebar.component";

import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SharedModule } from "@shared/shared.module";
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    FeedPageComponent,
    SidebarItemComponent,
    UserAvatarComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class CoreModule {
}
