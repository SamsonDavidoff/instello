import { createAction, props } from "@ngrx/store";
import { Student } from "@core/models/student.model";

export const setAllStudentsAction = createAction(
  '[CommentModule] Set All Students',
  props<{ payload: Student[] }>()
);

export const newStudentAction = createAction(
  '[CommentModule] Register New Student',
  props<{ payload: Student }>()
);
