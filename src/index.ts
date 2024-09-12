// Ejercicio 1

const years: number[] = [];
let initialYear = 2000;
const endYear = 2024;

for (let currentYear = initialYear; currentYear <= endYear; currentYear++) {
  years.push(currentYear);
  initialYear++;
}

console.log(years);

// Ejercicio 2

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];

words.reverse();
const joinedArray = words.join(" ");
console.log(joinedArray);

// Ejercicio 3:

let studentexamMarks: number[] = [];
studentexamMarks = [8, 6, 9, 4, 7];
const sortedExamMarks = studentexamMarks.sort();

for (const examMark of studentexamMarks) {
  if (examMark >= 5) {
    console.log(`Este alumno ha aprobado el examen con un: ${examMark}`);
  }
}

let averageStudentExamMarks = 0;

for (
  let studentExamMarkPosition = 0;
  studentExamMarkPosition < studentexamMarks.length;
  studentExamMarkPosition++
) {
  averageStudentExamMarks += studentexamMarks[studentExamMarkPosition];
}

console.log(
  `La nota media de los ${studentexamMarks.length} alumnos ha sido: un ${
    averageStudentExamMarks / studentexamMarks.length
  }`
);

console.log(
  `La nota más baja ha sido un ${
    sortedExamMarks[0]
  } y a nota más alta ha sido un ${sortedExamMarks.at(-1)}`
);
