import { createReducer, on } from "@ngrx/store";

import { Student } from "@core/models/student.model";
import { newStudentAction, setAllStudentsAction } from "@features/student/store/student.actions";

export interface StudentState {
  list: Student[]
}

const initialState: StudentState = {
  list: []
}

export const studentReducer = createReducer(
  initialState,
  on(newStudentAction, (state, { payload }) => ({
    ...state,
    list: [
      ...state.list,
      payload
    ]
  })),
  on(setAllStudentsAction, (state, { payload }) => {
    if (state.list.length === 0) {
      return {
        ...state,
        list: payload
      };
    }

    return state;
  })
);
