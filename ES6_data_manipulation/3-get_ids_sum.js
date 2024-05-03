// This script creates a function getStudentIdsSum that returns the sum of all the student ids.
export default function getStudentIdsSum(stud) {
  return stud.reduce((sum, elem) => sum + elem.id, 0);
}
