import { createSelector } from "@ngrx/store";

import { StudentState } from "@features/student/store/student.reducer";

export const selectAllStudents = createSelector(
  (state: { students: StudentState }) => state.students.list,
  (students) => students
);

export const selectStudentCount = createSelector(
  (state: { students: StudentState }) => state.students.list,
  (students) => students.length
);
