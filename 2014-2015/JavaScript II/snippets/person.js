function Person(fname, lname) {}

Person.prototype.sayHello = function() {
    console.log(this.fname + ' ' + this.lname);
}

function Student(fname, lname, grade) {
    this.fname = fname;
    this.lname = lname;
    this.grade = grade;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
	console.log(this.fname);
	console.log(this.lname);
    Person.prototype.sayHello.call(this, this.fname, this.lname);
}

var student = new Student("Kiro", "Troikata", 7);
student.sayHello(); // HELLO !!!
