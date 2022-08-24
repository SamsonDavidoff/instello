import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";
import { select, Store } from "@ngrx/store";
import { RootState } from "@core/store/root.reducer";
import { selectFixedSidebarState } from "@core/store/root.selectors";

@Component({
  selector: 'instello-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  showFixedSidebarObservable$!: Observable<boolean>;
  containerStyle = {}

  constructor(private store: Store<{ root: RootState }>) {
    this.showFixedSidebarObservable$ = store.pipe(select(selectFixedSidebarState));
  }

  ngOnInit() {
    this.showFixedSidebarObservable$
      .pipe(takeUntil(this.destroy$))
      .subscribe(canShowFixedSidebar => {
        this.containerStyle = {
          'margin-left': canShowFixedSidebar ? '300px' : '0'
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
