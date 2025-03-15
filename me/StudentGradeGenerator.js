// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentGrade() {
    let marks = parseInt(prompt("Enter your marks:"));
    
    if (marks > 79) {
        alert("Your grade is A");
    } else if (marks >= 60 && marks <= 79) {
        alert("Your grade is B");
    } else if (marks >= 50 && marks <= 59) {
        alert("Your grade is C");
    } else if (marks >= 40 && marks <= 49) {
        alert("Your grade is D");
    } else {
        alert("Your grade is E");
    }
}
studentGrade();
