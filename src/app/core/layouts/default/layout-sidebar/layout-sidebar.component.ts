import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";

import { select, Store } from "@ngrx/store";

import { RootState } from "@core/store/root.reducer";
import { sidebarItems } from "@core/constants/sidebar.constant";
import { selectFixedSidebarState } from "@core/store/root.selectors";

@Component({
  selector: 'instello-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  showFixedSidebarObservable$!: Observable<boolean>;
  sidebarItems = sidebarItems;
  sidebarStyle = {}

  constructor(private store: Store<{ root: RootState }>) {
    this.showFixedSidebarObservable$ = store.pipe(select(selectFixedSidebarState));
  }

  ngOnInit() {
    this.showFixedSidebarObservable$
      .pipe(takeUntil(this.destroy$))
      .subscribe(canShowFixedSidebar => {
        this.sidebarStyle = {
          'left': canShowFixedSidebar ? '0' : '-300px'
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
