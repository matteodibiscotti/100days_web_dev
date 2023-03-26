// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
let course = '100 days of web development';
//    - A variable that stores the price of that course
let price = 20;
//    - A variable that stores the three main goals that you have, when taking this course
let goals = ['Understand how web apps work', 'Learn JavaScript', 'Get fundamental knowledge to learn more about AppSec'];

// 2) Output ("alert") the three variable values
console.log(course);
console.log(price);
console.log(goals);

// 3) Try "grouping" the three variables together and still output their values thereafter
let study = {
    course: '100 days of web development',
    price: 20,
    goals: ['Understand how web apps work', 'Learn JavaScript', 'Get fundamental knowledge to learn more about AppSec']
};

console.log(study.course);
console.log(study.price);
console.log(study.goals);

// 4) Also output the second element in your "main goals" variable
console.log(study.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
function printGoal(array, arrayIndex) {
    let goal = array[arrayIndex];
    return goal;
}

// 6) Execute your custom command from (5) and output ("alert") the result
console.log(printGoal(study.goals, 2));