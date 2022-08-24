import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from "rxjs";

import { Store } from "@ngrx/store";
import { BreakpointObserver } from "@angular/cdk/layout";

import { RootState } from "@core/store/root.reducer";
import { changeFixedSidebarVisibility } from "@core/store/root.actions";

@Component({
  selector: 'instello-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();

  constructor(private store: Store<{ root: RootState }>,
              private breakpointObserver: BreakpointObserver,
              private cdf: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 1100px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.store.dispatch(changeFixedSidebarVisibility({ payload: state.matches }));
        this.cdf.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
