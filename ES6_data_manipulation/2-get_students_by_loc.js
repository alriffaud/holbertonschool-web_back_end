// This script creates a function getStudentsByLocation that returns an array of objects who
// are located in a specific city.
export default function getStudentsByLocation(stud, city) {
  return stud.filter((elem) => elem.location === city);
}
