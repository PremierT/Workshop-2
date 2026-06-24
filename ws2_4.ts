let score: number[] = [84, 53, 53, 67, 89];
let studentdata: [string, number] = ["Jane Doe", 684245962];
let totalscore: number = 0;

console.log(`Scores: ${score}`);
console.log(`Student ID ${studentdata[1]} | Student Name: ${studentdata[0]}`);
for(let i=0; i<score.length; i++){
    console.log(`Test ${i+1} score: ${score[i]}`);
}
for(let i=0; i<score.length; i++){
    totalscore += score[i];
}
console.log(`Total score: ${totalscore}`);
console.log(`Average score: ${totalscore/5}`);
