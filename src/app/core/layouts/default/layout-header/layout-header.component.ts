import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";
import { select, Store } from "@ngrx/store";
import { RootState } from "@core/store/root.reducer";
import { selectFixedSidebarState } from "@core/store/root.selectors";

@Component({
  selector: 'instello-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  showFixedSidebarObservable$!: Observable<boolean>;
  fixedSidebarVisible = true;

  constructor(private store: Store<{ root: RootState }>) {
    this.showFixedSidebarObservable$ = store.pipe(select(selectFixedSidebarState));
  }

  ngOnInit() {
    this.showFixedSidebarObservable$
      .pipe(takeUntil(this.destroy$))
      .subscribe(fixedSidebarVisible => this.fixedSidebarVisible = fixedSidebarVisible);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
