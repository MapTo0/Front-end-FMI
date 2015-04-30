function Person(fname, lname) {}

Person.prototype.sayHello = function() {
    console.log('Hello I am ' + this.fname + ' ' + this.lname);
}

function Student(fname, lname, grade) {
    this.fname = fname;
    this.lname = lname;
    this.grade = grade;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.sayHello = function() {
    Person.prototype.sayHello.call(this, this.fname, this.lname);

    console.log('And I am ' + this.grade + ' grade');
}

var student = new Student("Martin", "Troikata", 7);
student.sayHello(); 

// Hello I am Martin Troikata
// And I am 7 grade
