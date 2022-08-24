import { createSelector } from "@ngrx/store";

import { RootState } from "@core/store/root.reducer";

export const selectFixedSidebarState = createSelector(
  (state: { root: RootState }) => state.root.showFixedSidebar,
  (showFixedSidebar) => showFixedSidebar
);
