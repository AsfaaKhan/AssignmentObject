//Assignment of OBJECTS
//object  => {} => (key : value) pairs
var studentInfo = {
    Name: "Asfaa Khan",
    fatherName: "Naeem Khan",
    emailId: "12452@gmail.com",
    rollNo: 45,
    ClassId: 455878,
    is_passed: true,
};
console.log(studentInfo);
console.log(studentInfo.emailId);
var students = {
    Name: "Mahnoor Khan",
    fatherName: "Naeem ",
    emailId: "12452@gmail.com",
    rollNo: 65,
    ClassId: 455878,
    is_passed: true,
};
console.log(students);
//array of object 
var studentsInfo = {
    Name: ["Asfaa Khan", 'Ayesha khan', 'Ahmed khan',],
    fatherName: ["Naeem Khan", 'Imran', 'Aman '],
    emailId: ["12452@gmail.com", '1545@gmail.com', '45782@gamil.com'],
    rollNo: [45, 76, 87],
    ClassId: [455878, 145254, 789546],
    is_passed: [true, false, true],
};
console.log(studentsInfo.Name[1]);
console.log(studentsInfo);
//array of array 
var arr = [12, "asfaa", [145, true]];
console.log(arr);
//objects of objects
var studentsName = {
    IstStudent: {
        Name: "Mahnoor",
        fatherName: "Naeem",
        rollNo: 12,
    },
    second_student: {
        Name: { userName: "ahmed",
            userName2: "noman" },
        fatherName: "Naeem",
        rollNo: 13,
    },
    thirdStudent: {
        Name: "Amaan",
        fatherName: "Arif",
        rollNo: 14,
    }
};
console.log(studentsName);
console.log(studentsName.thirdStudent.rollNo);
