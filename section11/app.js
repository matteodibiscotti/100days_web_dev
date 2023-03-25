let greetingText = "Hello! I'm Matt"; // Only need to use let when creating the variable the first time
alert(greetingText);
greetingText = "Just kidding"; // Don't need let here because we are just reassigning the variable
alert(greetingText);

let hobbies = [
    'Cycling', 
    'Video Games'
];

alert(hobbies);

let job = {
    title: 'Developer',
    place: 'out the sticks',
    salary: 1000000 
}; // Object - grouping related data

alert(job.title);


let age = 30;

//============================
let adultYears;
let finalAge;

function calcYears() {
    adultYears = age - 18;
    return adultYears;
}

finalAge = calcYears();
alert(finalAge);
//============================
//This will change the value of adultYears outside the function scope

//============================
let childYears;

function calcYears() {
    let childYears = age - 18
}
//============================
//This utilises variable shadowing - even though a variable with the same name exists
//a seperate one is created within the function scope and doesn't make changes to the
//instance outside the function