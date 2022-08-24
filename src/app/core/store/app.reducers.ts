import { ActionReducerMap } from "@ngrx/store";

import { rootReducer } from "@core/store/root.reducer";

export const reducers: ActionReducerMap<any> = {
  root: rootReducer
}
