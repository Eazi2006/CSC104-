function calculateCGPA(){
    var totalcredits=0;
    var totalGradepoints=0;
    var numcourses= parseInt(prompt("Enter the number of courses:"));

    for (var i=0; i <numcourses; i++) {
        var coursecredits= parseFloat(prompt("Enter grade for course" + (i+1) + ":"));
        var courseGrade= prompt("Enter grade for course" + (i+1)+ ":");

        var gradepoints= 0;
        switch(coursegrade){
            case "A": gradepoints= 5.0;
            break;
            case "B": gradepoints=4.0;
            break;
            case "C": gradepoints=3.0;
            break;
            case "D": gradepoints=2.0;
            break;
            default: alert("Invalid grade. Please enter A, B, C, D");
        }
        totalcredits += parseFloat(coursecredits); // convert to number
        totalGradepoints += parseFloat(coursecredits) * gradepoints// convert to number
    }
    var cgpa= totalGradepoints / totalcredits;
    alert("Your CGPA is:" + cgpa.toFixed(2));
}
calculateCGPA()
