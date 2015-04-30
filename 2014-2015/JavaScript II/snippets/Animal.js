function Animal(name, age, gender) {
    this.age = setAge(age);
    this.eat = function() {
        console.log('I am eating');
    };

    function setAge(age) {
        if (age < 0) {
            return 'LOSHO';
        } else {
            return age;
        }
    };

    this.sayHiAndTellYourGender = function() {
        console.log('Hi, I am ' + name +
            ' and I am ' + age + ' old ' + gender);
    };
}

Animal.prototype.sleep = function() {
    console.log('The cat is sleeping' + this.age);
}