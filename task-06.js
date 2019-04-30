class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User{
    constructor(name, surname, year) {
        super();
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    getCourse() {
        var today = new Date();
        return today.getFullYear() - this.year;
    }
}