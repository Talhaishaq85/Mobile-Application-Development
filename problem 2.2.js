var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

var myArray=Object.values(student);
console.log(myArray);
delete student.rollno;
var myArray=Object.values(student);
console.log(myArray);

