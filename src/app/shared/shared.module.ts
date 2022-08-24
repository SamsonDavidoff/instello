import { NgModule } from "@angular/core";

import { NgOnceDirective } from "@shared/directives/ng-once/ng-once.directive";
import { HandleErrorDirective } from "@shared/directives/handle-error/handle-error.directive";
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';

@NgModule({
  declarations: [NgOnceDirective, HandleErrorDirective, SafeHtmlPipe],
  imports: [],
  exports: [NgOnceDirective, HandleErrorDirective, SafeHtmlPipe],
})
export class SharedModule {
}
