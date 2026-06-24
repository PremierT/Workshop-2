let score: number = 110; //Error case
let grade: string = "";
if(score < 0 || score > 100){
    console.log("Error: The score must be between 0 and 100.");
}else if(score >= 80){
    grade = "A";
    console.log(`Success Case: Score: ${score} | Grade: ${grade}`);
}else if(score >= 70){
    grade = "B";
    console.log(`Success Case: Score: ${score} | Grade: ${grade}`);
}else if(score >= 60){
    grade = "C";
    console.log(`Success Case: Score: ${score} | Grade: ${grade}`);
}else if(score >= 50){
    grade = "D";
    console.log(`Success Case: Score: ${score} | Grade: ${grade}`);
}else{
    grade = "F";
    console.log(`Success Case: Score: ${score} | Grade: ${grade}`);
}


