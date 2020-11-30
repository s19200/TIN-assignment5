class Person{
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(fullName) {
    var NameAndSurname = fullName.split(' ');
    this.firstName = NameAndSurname[0];
    this.lastName = NameAndSurname[1];
  }
}

class Student extends Person {
	constructor (firstName, lastName, id, grades){
		super(firstName, lastName);
		this.id = id;
		this.grades = grades;
	}
	
	 get average() {
    var sum = 0;
    for (var i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
}


var newStudent = new Student("Brady", "Johnson", 1, [5, 3, 4, 5]);

console.log(newStudent.average);
newStudent.fullName = 'Mike Wazowski';
console.log(newStudent.fullName);
console.log(newStudent.firstName);
console.log(newStudent.lastName);