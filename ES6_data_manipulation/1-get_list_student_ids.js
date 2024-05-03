// This script creates a function getListStudentIds that returns an array of ids from
// a list of object.
export default function getListStudentIds(arrObj) {
  if (!Array.isArray(arrObj)) {
    return [];
  }
  return arrObj.map((student) => student.id);
}
