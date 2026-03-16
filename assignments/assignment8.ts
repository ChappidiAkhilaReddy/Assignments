/*Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";*/

let para: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let parawords: string[] = para.split(" ")

let javaCount: number = 0;
for (let i: number = 0; i < parawords.length; i++) {
    if (parawords[i] === "Java") {
        javaCount++;
        console.log(`Count : ${javaCount} and Index : ${i}`)
    }
}

console.log(`Toatal occurrences of a “Java” word in the paragraph : ${javaCount} `);
