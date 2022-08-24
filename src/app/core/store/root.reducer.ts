import { createReducer, on } from "@ngrx/store";
import { changeFixedSidebarVisibility } from "@core/store/root.actions";

export interface RootState {
  showFixedSidebar: boolean;
}

const initialState: RootState = {
  showFixedSidebar: true,
}

export const rootReducer = createReducer(
  initialState,
  on(changeFixedSidebarVisibility, (state, { payload }) => ({
    ...state,
    showFixedSidebar: payload
  })),
);
