import { createAction, props } from "@ngrx/store";

export const changeFixedSidebarVisibility = createAction(
  'Core [Sidebar]',
  props<{ payload: boolean }>(),
);
