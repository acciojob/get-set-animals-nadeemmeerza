//complete this code
class Animal {
	counstructor(species){
		this.species = species;
	}

	getSpecies(){
		return this.species;
	}

	makeSound(){
		
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}

	makeSound(){
		bark();
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}

	makeSound(){
		purr();
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
