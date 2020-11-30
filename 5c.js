var prototype = {
	courses: ['TIN', 'BYT', 'ZPR']
};

function createObject(firstName, lastName, id){
	var student = Object.create(prototype);
	student.firstName = firstName;
	student.lastName = lastName;
	student. id = id;
	return student;
}

var test = createObject('Brady', 'Johnson', 1);
console.log(test.firstName +' '+ test.lastName+ ' '+ test.id + ' '+ test.courses);