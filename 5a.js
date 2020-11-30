var car = { brand: 'Nissan',
			model: 'Qashqai',
			year: 2019,
			age: function(){
				return new Date().getFullYear()- this.year;
			},
			fullName: function(){
				return this.brand + " " + this.model;
			}
		};
		name = car.fullName;
		
function getAllInfo(object){
	return(object.brand + ", " + object.model +  ", " + object.year + ', full name: '+ object.fullName() + ', age: ' + object.age());
};

console.log(getAllInfo(car));