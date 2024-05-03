// This script creates a function updateStudentGradeByCity that returns an array of students for
// a specific city with their new grade.
export default function getStudentsByLocation(stud, city, newGrades) {
  const filStud = stud.filter((elem) => elem.location === city);
  return filStud.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
}
