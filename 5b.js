function Student(firstName, lastName, id, grades) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.id = id,
    this.grades = grades,
    this.fullName = function() {
      return this.firstName + ' ' + this.lastName;
    },
    this.average = function() {
      var sum = 0;
      for (i = 0; i < grades.length; i++) {
        sum += grades[i];
      }
      var average = sum / grades.length;
      return average;
    }
};

var newStudent = new Student("Brady", "Johnson", 1, [5, 3, 4, 5]);
console.log(newStudent.firstName + ', ' + newStudent.lastName + ', ' + newStudent.id + ', ' + newStudent.grades + ', full name:' + newStudent.fullName() + ', average grade: ' + newStudent.average());