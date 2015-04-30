var buttons = document.getElementsByClassName('nums');
var field = document.getElementById('field');
var signs = document.getElementsByClassName('signs');
var eval = document.getElementsByClassName('long')[0];
var task = [];

Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener('click', function() {
        switch (field.value) {
            case '+':
                task.push(field.value);
                field.value = this.innerHTML;
                break;
            case '-':
                task.push(field.value);
                field.value = this.innerHTML;
                break;
            case '*':
                task.push(field.value);
                field.value = this.innerHTML;
                break;
            case '/':
                task.push(field.value);
                field.value = this.innerHTML;
                break;
            default:
                field.value += this.innerHTML;
                break;
        }
    });
});

Array.prototype.forEach.call(signs, function(button) {
    button.addEventListener('click', function() {
        task.push(field.value);
        checkArray(task);
        field.value = button.innerHTML;
    });
});

function calculate(array) {
    var sign = array[1];
    switch (sign) {
        case '+':
            return parseFloat(array[0]) + parseFloat(array[2]);
            break;
        case '-':
            return parseFloat(array[0]) - parseFloat(array[2]);
            break;
        case '*':
            return parseFloat(array[0]) * parseFloat(array[2]);
            break;
        case '/':
            return parseFloat(array[0]) / parseFloat(array[2]);
            break;
    }
}

function checkArray(array) {
    if (array.length === 3) {
        field.value = calculate(array);
        task = [];
        task.push(calculate(array));
    }
}

eval.addEventListener('click', function() {
    task.push(field.value);
    if (task.length === 3) {
        var result = calculate(task);
        task = [];	
        field.value = result;
    }
})
