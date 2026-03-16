/*Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";*/

//Count the total number of words in the sentence.
let sentence: string = "Java programming is fun and challenging";
let words: string[] = sentence.split(" ");
console.log(`Total number of words in the sentence : ${words.length}`);

//Print the sentence words in reverse order.
let reverseSentence: string = "";
for (let i = words.length - 1; i >= 0; i--) {
    reverseSentence = reverseSentence + " " + words[i];
}
reverseSentence = reverseSentence.trim();
console.log(`The sentence words in reverse order: ${reverseSentence}`);

//Convert the first character of each word to uppercase and print original sentence
let updatedSentence = "";
for (let i:number = 0; i < words.length; i++) {
    updatedSentence = updatedSentence + " " +words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
}

updatedSentence = updatedSentence.trim();
console.log(`the first character of each word to uppercase : ${updatedSentence}`)