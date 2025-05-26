let student = {
  name: "John Doe",
  age: 18,
  subjects: ["Math", "English", "History"]
};

// Add a new subject to the list of subjects
student.subjects.push("Science");

// Modify the name of the student
student.name = "Jane Doe";

// Update the age of the student
student.age = 20;

// Remove the "History" subject from the list of subjects
delete student.subjects[2];

// Print the updated student object
console.log(student);
