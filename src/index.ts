// Ejercicio 1

let years: number[] = [];
let firstYear = 2000;
let lastYear = 2024;

for (let year = firstYear; year <= lastYear; year++) {
  years.push(year);
  firstYear++;
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
let joinedArray = words.join(" ");
console.log(joinedArray);

// Ejercicio 3:

let studentexamMarks: number[] = [];
studentexamMarks = [8, 6, 9, 4, 7];
let sortedExamMarks = studentexamMarks.sort();

for (const examMark of studentexamMarks) {
  if (examMark >= 5) {
    console.log(`Este alumno ha aprobado el examen con un: ${examMark}`);
  }
}

let averageStudentMarks = 0;

for (
  let arrayPosition = 0;
  arrayPosition < studentexamMarks.length;
  arrayPosition++
) {
  averageStudentMarks += studentexamMarks[arrayPosition];
}

console.log(
  `La nota media de los ${studentexamMarks.length} alumnos ha sido: un ${
    averageStudentMarks / studentexamMarks.length
  }`
);

console.log(
  `La nota más baja ha sido un ${
    sortedExamMarks[0]
  } y a nota más alta ha sido un ${sortedExamMarks.at(-1)}`
);
