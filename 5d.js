function Student(firstName, lastName, id, grades) {
  this.firstName = firstName,
    this.lastName = lastName,
    this.id = id,
    this.grades = grades,
    
	Object.defineProperty(this, 'average',{
		get(){
			var sum = 0; 
			for(i=0; i<grades.length; i++){
				sum+=grades[i];
			}
			return sum/grades.length;
		}
	});
	
	Object.defineProperty(this, 'fullName',{
		get(){
			return this.firstName + ' '+ this.lastName;
		},
		
	set(fullName){
		nameAndSurname = fullName.split(' ');
		this.firstName = nameAndSurname[0];
		this.lastName = nameAndSurname[1];
	}
	});
};

var newStudent = new Student("Brady", "Johnson", 1, [5, 3, 4, 5]);

console.log(newStudent.average);
newStudent.fullName= 'Mike Wazowski';
console.log(newStudent.fullName);
console.log(newStudent.firstName);
console.log(newStudent.lastName);