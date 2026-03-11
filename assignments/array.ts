let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let studentMarks: number[] = [75, 80, 82];

let updatedStudentMarks: number[] = [];

let averageMarks: number = 0;
let totalMarks: number = 0;

//updating student marks by adding 10
for (let i = 0; i < studentMarks.length; i++) {
    updatedStudentMarks[i] = studentMarks[i] + 10;
    totalMarks += updatedStudentMarks[i];
}

averageMarks = totalMarks / studentMarks.length;

//printing updated marks
console.log("Updated Marks:")
for (let i = 0; i < studentMarks.length; i++) {
    console.log(`${studentNames[i]}:  ${updatedStudentMarks[i]}`);
}

console.log(`Average Marks: ${averageMarks}`)

