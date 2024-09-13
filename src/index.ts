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
const joinedSentence = words.join(" ");
console.log(joinedSentence);

// Ejercicio 3:

let studentExamMarks: number[] = [];
studentExamMarks = [8, 6, 9, 4, 7];
const sortedExamMarks = studentExamMarks.sort();

for (const examMark of studentExamMarks) {
  if (examMark >= 5) {
    console.log(`Este alumno ha aprobado el examen con un: ${examMark}`);
  }
}

let averageStudentExamMarks = 0;

for (
  let studentExamMarkPosition = 0;
  studentExamMarkPosition < studentExamMarks.length;
  studentExamMarkPosition++
) {
  averageStudentExamMarks += studentExamMarks[studentExamMarkPosition];
}

console.log(
  `La nota media de los ${studentExamMarks.length} alumnos ha sido: un ${
    averageStudentExamMarks / studentExamMarks.length
  }`
);

console.log(
  `La nota más baja ha sido un ${
    sortedExamMarks[0]
  } y a nota más alta ha sido un ${sortedExamMarks.at(-1)}`
);
